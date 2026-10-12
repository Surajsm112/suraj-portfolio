const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = { name: 100, subject: 150, message: 2000 };

/** Returns an object of field -> error message. Empty object means valid. */
export function validateContact({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  else if (name.trim().length > LIMITS.name) errors.name = `Name must be ${LIMITS.name} characters or fewer.`;

  if (!email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';

  if (!subject.trim()) errors.subject = 'Please enter a subject.';
  else if (subject.trim().length > LIMITS.subject) errors.subject = `Subject must be ${LIMITS.subject} characters or fewer.`;

  if (!message.trim()) errors.message = 'Please write a message.';
  else if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  else if (message.trim().length > LIMITS.message) errors.message = `Message must be ${LIMITS.message} characters or fewer.`;

  return errors;
}
