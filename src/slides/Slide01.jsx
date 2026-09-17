
export default function Slide01() {
  return (
    <section className="slide cover">
      <div className="cover-grid">
        <div className="cover-main">
          <div className="kicker">Ujian Sidang Skripsi</div>
          <h1>Implementasi Model Apriori Association Rule Mining pada Sistem Rekomendasi E-Book Perpustakaan Digital</h1>
          <div className="cover-rule"></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}>
            <img
              src="/logo.png"
              alt="Logo Universitas"
              style={{
                width: '4em',
                filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8)) drop-shadow(0 0 3px rgba(255,255,255,0.6))'
              }}
            />
            <p style={{ margin: 0 }}>Program Studi S1 Teknik Informatika · Fakultas Teknik dan Ilmu Komputer<br />Universitas Muhammadiyah Semarang · 2026</p>
          </div>
        </div>
        <div className="cover-side">
          <div style={{ marginBottom: '1em' }}>
            <dl className="rec" style={{ gap: '0.4em' }}>
              <dt style={{ color: 'var(--brass)' }}>Disusun Oleh</dt>
              <dd style={{ fontSize: '1.3em', fontWeight: 600, color: '#fff' }}>Riski Arya Putra<small style={{ fontSize: '0.7em', color: 'var(--ink)', marginTop: '0.2em' }}>NIM C2C022010</small></dd>
            </dl>
          </div>

          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--brass) 0%, transparent 100%)', opacity: 0.3, marginBottom: '1em' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2em' }}>
            <dl className="rec">
              <dt>Pembimbing I</dt>
              <dd>Dr. Muhammad Munsarif, S.Kom., M.Kom., Ph.D</dd>
            </dl>
            <dl className="rec">
              <dt>Pembimbing II</dt>
              <dd>Muhammad Sam’an, S.Si., M.Mat., Ph.D</dd>
            </dl>
            <dl className="rec">
              <dt>Dosen Penguji</dt>
              <dd>Safuan, S.Kom., M.Kom.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}