
export default function Slide12() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Implementasi antarmuka</h2>
      <p className="sub">Menjawab rumusan masalah 3 — model yang sama dikonsumsi dua platform.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="three">
          <div className="col">
            <h4>Website — sisi pengguna</h4>
            <ul className="dash">
              <li>Beranda</li><li>Katalog</li><li>Detail buku</li><li>Rekomendasi</li><li>Cara kerja</li>
            </ul>
          </div>
          <div className="col">
            <h4>Website — sisi administrator</h4>
            <ul className="dash">
              <li>Dashboard</li><li>Kelola buku, rating, dan pengguna</li><li><strong>Halaman Data Mining &amp; Apriori</strong> — menjalankan pra-pemrosesan, memantau tiap iterasi, meninjau distribusi confidence dan lift, serta melihat hasil evaluasi</li>
            </ul>
          </div>
          <div className="col">
            <h4>Aplikasi mobile Android</h4>
            <ul className="dash">
              <li>Layar pembuka</li><li>Beranda</li><li>Katalog</li><li>Detail buku</li><li>Rekomendasi</li><li>Cara kerja</li>
            </ul>
          </div>
        </div>
        <div className="note">Halaman <strong>Cara Kerja</strong> hadir di kedua platform agar rekomendasi bersifat transparan — pemustaka dapat menelusuri dasar perhitungan di balik setiap saran bacaan.</div>
      </div>
      <div className="pageno">12</div>
    </section>
  );
}