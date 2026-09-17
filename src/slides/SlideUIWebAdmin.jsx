export default function SlideUIWebAdmin() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Antarmuka Website (Administrator)</h2>
      <p className="sub">Tampilan antarmuka dashboard untuk mengelola data dan proses Apriori.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <img src="/ui-web-admin.png" alt="Antarmuka Website Administrator" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
