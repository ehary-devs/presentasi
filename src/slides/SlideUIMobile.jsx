export default function SlideUIMobile() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Antarmuka Aplikasi Mobile</h2>
      <p className="sub">Tampilan antarmuka pada aplikasi mobile Android.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '2em' }}>
        <img src="/ui-mobile-1.png" alt="Antarmuka Mobile Android 1" style={{ maxWidth: '45%', maxHeight: '60vh', objectFit: 'contain' }} />
        <img src="/ui-mobile-2.png" alt="Antarmuka Mobile Android 2" style={{ maxWidth: '45%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
