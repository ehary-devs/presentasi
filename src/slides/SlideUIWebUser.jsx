export default function SlideUIWebUser() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Antarmuka Website (Pengguna)</h2>
      <p className="sub">Tampilan antarmuka website dari sisi pemustaka.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <img src="/ui-web-user.png" alt="Antarmuka Website Pengguna" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
