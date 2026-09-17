
export default function Slide03() {
  return (
    <section className="slide" style={{ '--tint': 'var(--brass)' }}>
      <div className="spine"><span>BAB I · Pendahuluan</span></div>
      <h2>Latar belakang</h2>
      <p className="sub">Konteks, motivasi, dan permasalahan yang mendasari perlunya penelitian sistem rekomendasi e-book ini.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="two">
          <div className="col">
            <ul className="dash">
              <li>Perpustakaan digital menyimpan data transaksi peminjaman e-book dalam jumlah besar, namun <strong>belum dimanfaatkan</strong> sebagai dasar rekomendasi bacaan.</li>
              <li>Association Rule Mining dengan algoritma Apriori efektif menemukan pola keterkaitan antar item, tetapi pembangkitan kandidat yang <strong>iteratif</strong> membuat kompleksitas komputasi meningkat tajam seiring bertambahnya data.</li>
              <li>Apriori bersifat <strong>statis</strong> terhadap perubahan data — setiap penambahan transaksi menuntut perhitungan ulang. Diperlukan arsitektur yang memisahkan proses mining dari layanan rekomendasi.</li>
            </ul>
          </div>
          <div className="col">
            <ul className="dash">
              <li>Kualitas aturan sangat <strong>sensitif</strong> terhadap penetapan nilai minimum support dan minimum confidence.</li>
              <li>Keterbatasan data peminjaman internal diatasi dengan dataset publik <strong>Bookcrossing</strong>, di mana rating diperlakukan sebagai representasi interaksi peminjaman.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pageno">03</div>
    </section>
  );
}