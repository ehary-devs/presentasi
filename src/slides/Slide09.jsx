
export default function Slide09() {
  return (
    <section className="slide" style={{ '--tint': 'var(--green)' }}>
      <div className="spine"><span>BAB III · Metode</span></div>
      <h2>Dataset Bookcrossing</h2>
      <p className="sub">Data sekunder publik, dipilih karena keterbatasan volume data peminjaman pada sistem perpustakaan internal.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="metrics">
          <div className="metric"><div className="v">1.030.543</div><div className="k">record rating mentah sebagai representasi interaksi peminjaman</div></div>
          <div className="metric"><div className="v">271.045</div><div className="k">judul e-book dalam katalog</div></div>
          <div className="metric"><div className="v">65.840</div><div className="k">pengguna dengan sedikitnya satu rating positif</div></div>
        </div>
        <div className="two" style={{ marginTop: '1.5em' }}>
          <div className="col">
            <h4>Atribut yang digunakan</h4>
            <ul className="dash">
              <li><strong>User-ID</strong> — pengenal transaksi</li>
              <li><strong>ISBN</strong> — pengenal item (e-book)</li>
            </ul>
          </div>
          <div className="col">
            <h4>Bentuk transaksi</h4>
            <ul className="dash">
              <li>Data dikelompokkan per pengguna menjadi <em>{'{User-ID: [ISBN₁, ISBN₂, …]}'}</em> sebagai unit dasar association rule mining.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pageno">09</div>
    </section>
  );
}