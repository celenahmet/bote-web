export default function Header() {
  return (
    <header className="header">
      <div className="headerTop">
        <div className="brand">
          <div className="brandDot" />
          <div className="brandText">
            <h1>Hacettepe Bilgi Paneli</h1>
            <p>Yemekhane menusu ve ring saatleri</p>
          </div>
        </div>

        <a className="linkBtn" href="https://geyikapi.acmhacettepe.com" target="_blank" rel="noreferrer">
          Kaynak
        </a>
      </div>
    </header>
  );
}
