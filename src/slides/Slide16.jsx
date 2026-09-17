
export default function Slide16() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Evaluasi performa model</h2>
      <p className="sub">Skema hold-out 80:20 pada skenario terpilih — aturan dibangun ulang hanya dari data training, lalu diuji pada buku yang disembunyikan.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="metrics">
          <div className="metric"><div className="v">5,40%</div><div className="k">Precision@10 — rata-rata 0,54 dari 10 buku yang direkomendasikan benar-benar relevan</div></div>
          <div className="metric"><div className="v">8,65%</div><div className="k">Recall@10 — proporsi buku relevan yang berhasil ditemukan kembali</div></div>
          <div className="metric"><div className="v">6,65%</div><div className="k">F1-Score — rata-rata harmonis presisi dan recall</div></div>
          <div className="metric"><div className="v amber">32,21×</div><div className="k">Rata-rata lift — setiap aturan melipatgandakan peluang peminjaman buku konsekuen</div></div>
          <div className="metric"><div className="v warn">5,55%</div><div className="k">User coverage — 394 dari 7.100 pengguna memperoleh sedikitnya satu rekomendasi</div></div>
          <div className="metric"><div className="v warn">0,40%</div><div className="k">Catalog coverage — hanya 23 judul dari 271.045 yang pernah muncul sebagai rekomendasi</div></div>
        </div>
        <div className="note">Model menghasilkan aturan yang <strong>sangat kuat secara statistik namun sempit jangkauannya</strong>. Mining pada 80% data hanya menyisakan 22 dari 50 aturan — penurunan 56% akibat pengurangan 20% data menegaskan kembali tingginya sparsity.</div>
      </div>
      <div className="pageno">16</div>
    </section>
  );
}