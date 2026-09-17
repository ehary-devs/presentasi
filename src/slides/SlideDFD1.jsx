export default function SlideDFD1() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB III · Perancangan</span></div>
      <h2>DFD Level 1</h2>
      <p className="sub">Dekomposisi proses sistem rekomendasi menjadi 5 sub-proses utama.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center' }}>
        <img src="/dfd1.png" alt="DFD Level 1" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
