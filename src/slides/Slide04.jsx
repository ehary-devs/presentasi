
export default function Slide04() {
  return (
    <section className="slide" style={{ '--tint': 'var(--brass)' }}>
      <div className="spine"><span>BAB I · Pendahuluan</span></div>
      <h2>Rumusan masalah</h2>
      <p className="sub">Tiga pertanyaan utama yang akan dijawab melalui penelitian ini.</p>
      <div className="hr"></div>
      <div className="body">
        <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2em', marginTop: '1.5em' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}>
            <div style={{ flexShrink: 0, width: '2.5em', height: '2.5em', borderRadius: '50%', border: '1px solid var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em', fontFamily: 'var(--serif)', color: 'var(--brass)' }}>1</div>
            <span style={{ fontSize: '1.1em', lineHeight: 1.4 }}>Bagaimana merancang arsitektur sistem Apriori yang mampu beradaptasi terhadap perubahan karakteristik data transaksi yang dinamis?</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}>
            <div style={{ flexShrink: 0, width: '2.5em', height: '2.5em', borderRadius: '50%', border: '1px solid var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em', fontFamily: 'var(--serif)', color: 'var(--brass)' }}>2</div>
            <span style={{ fontSize: '1.1em', lineHeight: 1.4 }}>Bagaimana kinerja model Association Rule Mining pada Book Recommendation Dataset?</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}>
            <div style={{ flexShrink: 0, width: '2.5em', height: '2.5em', borderRadius: '50%', border: '1px solid var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em', fontFamily: 'var(--serif)', color: 'var(--brass)' }}>3</div>
            <span style={{ fontSize: '1.1em', lineHeight: 1.4 }}>Bagaimana implementasi model Apriori pada sistem rekomendasi e-book perpustakaan digital berbasis website dan aplikasi mobile?</span>
          </li>
        </ol>
      </div>
      <div className="pageno">04</div>
    </section>
  );
}