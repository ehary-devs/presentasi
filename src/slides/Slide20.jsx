
export default function Slide20() {
  return (
    <section className="slide cover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'radial-gradient(circle at center, var(--card) 0%, var(--paper) 100%)' }}>
      <img 
        src="/logo.png" 
        alt="Logo" 
        style={{ 
          width: '5.5em', 
          marginBottom: '2em',
          filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8)) drop-shadow(0 0 3px rgba(255,255,255,0.6))'
        }} 
      />
      <h2 style={{ fontSize: '4.5em', fontFamily: 'var(--serif)', color: 'var(--brass)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>Terima kasih</h2>
      <div style={{ width: '5em', height: '2px', background: 'var(--brass)', margin: '2em 0' }}></div>
      <p style={{ color: 'var(--ink-soft)', fontSize: '1.1em', lineHeight: 1.6, maxWidth: '50ch', margin: 0 }}>
        Riski Arya Putra · C2C022010<br/>
        S1 Teknik Informatika, Universitas Muhammadiyah Semarang
      </p>
      <p style={{ color: '#fff', fontSize: '1.15em', marginTop: '2.5em', fontWeight: 500, letterSpacing: '0.02em' }}>
        Mohon arahan dan masukan dari Bapak/Ibu Dewan Penguji.
      </p>
    </section>
  );
}