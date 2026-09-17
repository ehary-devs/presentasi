
export default function Slide05() {
  return (
    <section className="slide" style={{ '--tint': 'var(--brass)' }}>
      <div className="spine"><span>BAB I · Pendahuluan</span></div>
      <h2>Batasan masalah</h2>
      <p className="sub">Ruang lingkup untuk memfokuskan penelitian agar tidak meluas dari tujuan awal.</p>
      <div className="hr"></div>
      <div className="body">
        <ol className="num" style={{ gap: '2em' }}>
          <li style={{ display: 'flex', gap: '1em', width: '80%', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '3em', lineHeight: '0.8', opacity: 0.8 }}>1</b>
            <span style={{ paddingTop: '0.3em' }}>Penelitian dibatasi pada perancangan dan penerapan arsitektur sistem rekomendasi berbasis <strong>algoritma Apriori</strong>, tanpa membahas arsitektur berbasis algoritma lain.</span>
          </li>
          <li style={{ display: 'flex', gap: '1em', width: '80%', marginLeft: '10%', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '3em', lineHeight: '0.8', opacity: 0.8 }}>2</b>
            <span style={{ paddingTop: '0.3em' }}>Evaluasi kinerja model dibatasi pada metrik <strong>akurasi, presisi, recall, dan F1-score</strong>, dengan nilai ambang support dan confidence ditetapkan berdasarkan karakteristik data transaksi peminjaman.</span>
          </li>
          <li style={{ display: 'flex', gap: '1em', width: '80%', marginLeft: '20%', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '3em', lineHeight: '0.8', opacity: 0.8 }}>3</b>
            <span style={{ paddingTop: '0.3em' }}>Implementasi dibatasi pada perpustakaan digital berbasis <strong>website dan aplikasi mobile</strong> menggunakan dataset Bookcrossing, tanpa integrasi data eksternal maupun sistem perpustakaan fisik.</span>
          </li>
        </ol>
      </div>
      <div className="pageno">05</div>
    </section>
  );
}