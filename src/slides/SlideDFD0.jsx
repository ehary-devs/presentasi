export default function SlideDFD0() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB III · Perancangan</span></div>
      <h2>DFD Level 0 (Context Diagram)</h2>
      <p className="sub">Aliran data tingkat teratas antara entitas eksternal dengan sistem.</p>
      <div className="hr"></div>
      <div className="body" style={{ alignItems: 'center' }}>
        <img src="/dfd0.png" alt="DFD Level 0" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
      </div>
    </section>
  );
}
