import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Page not found — Suraj S';
    return () => { document.title = prev; };
  }, []);

  return (
    <main className="notfound">
      <div className="bg-grid" aria-hidden="true" />
      <p className="notfound-code gradient-text">404</p>
      <h1>This page doesn't exist</h1>
      <p className="muted">The link may be broken or the page may have moved.</p>
      <Link className="btn btn-primary" to="/"><span>Back to portfolio</span></Link>
    </main>
  );
}
