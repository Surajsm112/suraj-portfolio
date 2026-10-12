/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({ variant = 'primary', href, children, icon, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
