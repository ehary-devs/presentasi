
export default function Slide06() {
  return (
    <section className="slide" style={{ '--tint': 'var(--brass)' }}>
      <div className="spine"><span>BAB I · Pendahuluan</span></div>
      <h2>Tujuan penelitian</h2>
      <p className="sub">Capaian spesifik yang diharapkan dari penyelesaian masalah yang telah dirumuskan.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="three" style={{ marginTop: '2em', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '4em', color: 'var(--brass)', fontFamily: 'var(--serif)', fontWeight: 600, lineHeight: 1, opacity: 0.8 }}>1</div>
            <p style={{ marginTop: '0.8em', fontSize: '0.95em', lineHeight: 1.5 }}>Menentukan nilai <strong>minimum support</strong> dan <strong>minimum confidence</strong> yang tepat berdasarkan karakteristik data transaksi peminjaman.</p>
          </div>
          <div>
            <div style={{ fontSize: '4em', color: 'var(--brass)', fontFamily: 'var(--serif)', fontWeight: 600, lineHeight: 1, opacity: 0.8 }}>2</div>
            <p style={{ marginTop: '0.8em', fontSize: '0.95em', lineHeight: 1.5 }}>Melakukan <strong>evaluasi kinerja model</strong> menggunakan akurasi, presisi, recall, dan F1-score.</p>
          </div>
          <div>
            <div style={{ fontSize: '4em', color: 'var(--brass)', fontFamily: 'var(--serif)', fontWeight: 600, lineHeight: 1, opacity: 0.8 }}>3</div>
            <p style={{ marginTop: '0.8em', fontSize: '0.95em', lineHeight: 1.5 }}>Mengembangkan <strong>aplikasi perpustakaan digital</strong> berbasis website dan aplikasi mobile yang mengintegrasikan model tersebut.</p>
          </div>
        </div>
        <div className="note" style={{ marginTop: '3em' }}>Ketiga tujuan menjawab ketiga rumusan masalah secara berurutan dan menjadi kerangka pembahasan pada BAB IV.</div>
      </div>
      <div className="pageno">06</div>
    </section>
  );
}