import { profile } from '../data/profile';

export const isApiConfigured = Boolean(profile.contactApiUrl);

/**
 * Sends the message to the Java backend. Resolves only on a real 2xx response;
 * throws an Error with a user-readable message otherwise (so the UI never shows a fake success).
 */
export async function sendContact(payload) {
  let res;
  try {
    res = await fetch(`${profile.contactApiUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Could not reach the contact service. Please try the email option instead.');
  }
  if (res.ok) return;
  let detail = '';
  try {
    detail = (await res.json()).message || '';
  } catch {
    /* non-JSON error body */
  }
  if (res.status === 429) throw new Error('Too many messages sent recently. Please try again later.');
  throw new Error(detail || 'The message could not be sent. Please try the email option instead.');
}

/** Builds a mailto: link (limitation: depends on a desktop mail client being configured). */
export function buildMailto({ name, email, subject, message }) {
  const body = `${message}\n\n— ${name}${email ? ` (${email})` : ''}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Builds a Gmail web "compose" link. Unlike mailto:, this always opens (in a new tab) regardless
 * of whether the visitor has a desktop mail client configured — it only needs a browser.
 */
export function buildGmailCompose({ name, email, subject, message } = {}) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: profile.email });
  if (subject) params.set('su', subject);
  if (name || message) params.set('body', `${message || ''}\n\n— ${name || ''}${email ? ` (${email})` : ''}`.trim());
  return `https://mail.google.com/mail/?${params.toString()}`;
}
