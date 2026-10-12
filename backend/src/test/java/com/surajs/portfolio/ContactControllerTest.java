package com.surajs.portfolio;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {
        "portfolio.contact.storage-file=target/test-messages.jsonl",
        "portfolio.contact.rate-limit.max-requests=3"
})
class ContactControllerTest {

    @Autowired
    private MockMvc mvc;

    private static final String VALID =
            "{\"name\":\"Jane\",\"email\":\"jane@example.com\",\"subject\":\"Hello\",\"message\":\"A valid message body.\"}";

    @Test
    void healthIsOk() throws Exception {
        mvc.perform(get("/api/health")).andExpect(status().isOk()).andExpect(jsonPath("$.message").value("ok"));
    }

    @Test
    void rejectsInvalidEmail() throws Exception {
        String bad = "{\"name\":\"Jane\",\"email\":\"nope\",\"subject\":\"Hi\",\"message\":\"A valid message body.\"}";
        mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(bad))
                .andExpect(status().isBadRequest());
    }

    @Test
    void honeypotIsSilentlyAccepted() throws Exception {
        String bot = "{\"name\":\"Bot\",\"email\":\"b@example.com\",\"subject\":\"Hi\",\"message\":\"spam spam spam\",\"website\":\"x\"}";
        mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(bot))
                .andExpect(status().isOk());
    }

    @Test
    void acceptsValidThenRateLimits() throws Exception {
        for (int i = 0; i < 3; i++) {
            mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(VALID))
                    .andExpect(status().isOk());
        }
        mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(VALID))
                .andExpect(status().isTooManyRequests());
    }
}
