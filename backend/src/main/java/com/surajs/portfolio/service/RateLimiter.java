package com.surajs.portfolio.service;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/** Simple in-memory sliding-window limiter per client key (suitable for single-instance deployments). */
@Component
public class RateLimiter {

    private final int maxRequests;
    private final long windowMillis;
    private final ConcurrentMap<String, Deque<Long>> hits = new ConcurrentHashMap<>();

    public RateLimiter(@Value("${portfolio.contact.rate-limit.max-requests}") int maxRequests,
                       @Value("${portfolio.contact.rate-limit.window-minutes}") long windowMinutes) {
        this.maxRequests = maxRequests;
        this.windowMillis = windowMinutes * 60_000L;
    }

    public boolean tryAcquire(String key) {
        long now = System.currentTimeMillis();
        Deque<Long> q = hits.computeIfAbsent(key, k -> new ArrayDeque<>());
        synchronized (q) {
            while (!q.isEmpty() && now - q.peekFirst() > windowMillis) {
                q.pollFirst();
            }
            if (q.size() >= maxRequests) {
                return false;
            }
            q.addLast(now);
            return true;
        }
    }
}
