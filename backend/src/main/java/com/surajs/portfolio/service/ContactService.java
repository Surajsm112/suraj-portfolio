package com.surajs.portfolio.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.surajs.portfolio.dto.ContactRequest;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final Path storageFile;
    private final String mailTo;
    private final String mailFrom;
    private final String smtpHost;
    private final JavaMailSender mailSender;

    public ContactService(@Value("${portfolio.contact.storage-file}") String storageFile,
                          @Value("${portfolio.mail.to:}") String mailTo,
                          @Value("${portfolio.mail.from:}") String mailFrom,
                          @Value("${spring.mail.host:}") String smtpHost,
                          @Autowired(required = false) JavaMailSender mailSender) {
        this.storageFile = Paths.get(storageFile);
        this.mailTo = mailTo;
        this.mailFrom = mailFrom;
        this.smtpHost = smtpHost;
        this.mailSender = mailSender;
    }

    public boolean isMailConfigured() {
        return mailSender != null && !mailTo.isEmpty() && !smtpHost.isEmpty();
    }

    /**
     * Persists the message, then forwards it by email when SMTP is configured.
     * Throws if a configured step fails, so callers never report a false success.
     */
    public void handle(ContactRequest req) throws IOException {
        persist(req);
        if (isMailConfigured()) {
            forward(req);
        } else {
            log.info("Contact message stored (email forwarding not configured).");
        }
    }

    private void persist(ContactRequest req) throws IOException {
        Path parent = storageFile.toAbsolutePath().getParent();
        if (parent != null) {
            Files.createDirectories(parent);
        }
        String line = "{\"receivedAt\":\"" + Instant.now() + "\",\"name\":" + json(req.getName())
                + ",\"email\":" + json(req.getEmail()) + ",\"subject\":" + json(req.getSubject())
                + ",\"message\":" + json(req.getMessage()) + "}\n";
        Files.write(storageFile, line.getBytes(StandardCharsets.UTF_8),
                StandardOpenOption.CREATE, StandardOpenOption.APPEND);
    }

    private void forward(ContactRequest req) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(mailTo);
        if (!mailFrom.isEmpty()) {
            mail.setFrom(mailFrom);
        }
        mail.setReplyTo(stripLineBreaks(req.getEmail()));
        mail.setSubject("[Portfolio] " + stripLineBreaks(req.getSubject()));
        mail.setText("From: " + stripLineBreaks(req.getName()) + " <" + stripLineBreaks(req.getEmail()) + ">\n\n"
                + req.getMessage());
        mailSender.send(mail);
    }

    /** Prevents header injection through CR/LF in values that end up in mail headers. */
    static String stripLineBreaks(String s) {
        return s == null ? "" : s.replaceAll("[\\r\\n]+", " ").trim();
    }

    static String json(String s) {
        StringBuilder sb = new StringBuilder("\"");
        for (char c : s.toCharArray()) {
            switch (c) {
                case '"': sb.append("\\\""); break;
                case '\\': sb.append("\\\\"); break;
                case '\n': sb.append("\\n"); break;
                case '\r': sb.append("\\r"); break;
                case '\t': sb.append("\\t"); break;
                default:
                    if (c < 0x20) {
                        sb.append(String.format("\\u%04x", (int) c));
                    } else {
                        sb.append(c);
                    }
            }
        }
        return sb.append('"').toString();
    }
}
