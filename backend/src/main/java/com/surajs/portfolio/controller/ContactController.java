package com.surajs.portfolio.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.surajs.portfolio.dto.ApiMessage;
import com.surajs.portfolio.dto.ContactRequest;
import com.surajs.portfolio.service.ContactService;
import com.surajs.portfolio.service.RateLimiter;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final ContactService contactService;
    private final RateLimiter rateLimiter;

    public ContactController(ContactService contactService, RateLimiter rateLimiter) {
        this.contactService = contactService;
        this.rateLimiter = rateLimiter;
    }

    @GetMapping("/health")
    public ApiMessage health() {
        return new ApiMessage("ok");
    }

    @PostMapping("/contact")
    public ResponseEntity<ApiMessage> contact(@Valid @RequestBody ContactRequest request, HttpServletRequest http) {
        // Honeypot filled => almost certainly a bot. Pretend success and do nothing.
        if (request.getWebsite() != null && !request.getWebsite().trim().isEmpty()) {
            return ResponseEntity.ok(new ApiMessage("Message received."));
        }
        if (!rateLimiter.tryAcquire(http.getRemoteAddr())) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(new ApiMessage("Too many messages. Please try again later."));
        }
        try {
            contactService.handle(request);
        } catch (IOException | MailException e) {
            log.error("Failed to process contact message", e);
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY)
                    .body(new ApiMessage("The message could not be processed. Please try again later."));
        }
        return ResponseEntity.ok(new ApiMessage("Message received."));
    }
}
