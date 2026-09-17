export default function SlideERD() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB III · Perancangan</span></div>
      <h2>Entity Relationship Diagram (ERD)</h2>
      <p className="sub">Struktur tabel basis data relasional yang menopang sistem rekomendasi.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center' }}>
        <img src="/erd.png" alt="Entity Relationship Diagram (ERD)" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
