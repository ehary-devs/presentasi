
export default function Slide19() {
  return (
    <section className="slide" style={{ '--tint': 'var(--green)' }}>
      <div className="spine"><span>BAB V · Penutup</span></div>
      <h2>Keterbatasan dan saran</h2>
      <p className="sub">Model bekerja optimal hanya pada kelompok buku berseri dan belum melayani 94,45% pengguna.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="three">
          <div className="col">
            <h4>Bagi pengembang sistem</h4>
            <ul className="dash">
              <li>Pendekatan hibrida dengan content-based atau collaborative filtering</li>
              <li>Penanganan duplikasi judul dan penyaringan rekomendasi antar judul satu seri</li>
              <li>Penjadwalan mining otomatis dan strategi incremental mining</li>
            </ul>
          </div>
          <div className="col">
            <h4>Bagi penelitian selanjutnya</h4>
            <ul className="dash">
              <li>Menggunakan data peminjaman riil dari perpustakaan internal</li>
              <li>Membandingkan Apriori dengan FP-Growth pada data yang sama</li>
              <li>Memperluas evaluasi dengan NDCG, MAP, novelty, dan diversity</li>
            </ul>
          </div>
          <div className="col">
            <h4>Bagi perpustakaan</h4>
            <ul className="dash">
              <li>Pencatatan transaksi peminjaman yang konsisten dan lengkap</li>
              <li>Memanfaatkan temuan konsentrasi peminjaman untuk pengadaan dan promosi koleksi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pageno">19</div>
    </section>
  );
}