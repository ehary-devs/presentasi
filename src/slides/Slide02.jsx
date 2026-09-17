
export default function Slide02() {
  return (
    <section className="slide" style={{ '--tint': 'var(--ink-soft)' }}>
      <div className="spine"><span>Pengantar</span></div>
      <h2>Alur presentasi</h2>
      <div className="hr"></div>
      <div className="body">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '2.5em', columnGap: '4em', marginTop: '1.5em' }}>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>1</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Pendahuluan</strong><br/>Latar belakang, rumusan masalah, batasan, dan tujuan</span>
          </div>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>4</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Hasil perancangan</strong><br/>dan implementasi sistem</span>
          </div>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>2</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Landasan teori</strong><br/>Association Rule Mining dan algoritma Apriori</span>
          </div>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>5</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Hasil pengolahan data</strong><br/>dan evaluasi kinerja model</span>
          </div>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>3</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Metode penelitian</strong><br/>Alur kerja dan dataset</span>
          </div>
          <div style={{ display: 'flex', gap: '1em', alignItems: 'flex-start' }}>
            <b style={{ fontSize: '2.5em', lineHeight: 0.8, color: 'var(--brass)', fontFamily: 'var(--serif)', opacity: 0.9 }}>6</b>
            <span style={{ paddingTop: '0.2em', fontSize: '1.05em', lineHeight: 1.4 }}><strong>Kesimpulan</strong><br/>dan saran</span>
          </div>
        </div>
      </div>
      <div className="pageno">02</div>
    </section>
  );
}