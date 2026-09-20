export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>{year} Web Programciligi Final Odevi</span>

      <span className="footerMid">
        Ahmet Çelen <span className="sep">*</span>{" "}
        <a className="footerLink" href="https://ahmetcelen.com" target="_blank" rel="noreferrer">
          ahmetcelen.com
        </a>
      </span>

      <span>React + API (tRPC)</span>
    </footer>
  );
}
