export default function SlideUsecase() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB III · Perancangan</span></div>
      <h2>Use Case Diagram</h2>
      <p className="sub">Interaksi aktor Pengguna dan Admin terhadap sistem rekomendasi.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center' }}>
        <img src="/usecase.png" alt="Use Case Diagram" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
