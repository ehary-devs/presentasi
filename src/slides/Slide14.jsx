
export default function Slide14() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Aturan asosiasi dengan confidence tertinggi</h2>
      <div className="hr"></div>
      <div className="body">
        <div className="tablewrap">
          <table>
            <thead>
              <tr><th>Jika meminjam</th><th>Maka meminjam</th><th className="n">Support</th><th className="n">Confidence</th><th className="n">Lift</th></tr>
            </thead>
            <tbody>
              <tr><td>Harry Potter and the Sorcerer's Stone (1)</td><td>Harry Potter and the Chamber of Secrets (2)</td><td className="n">1,06%</td><td className="n">72,82%</td><td className="n">44,96</td></tr>
              <tr><td>Harry Potter and the Chamber of Secrets (2)</td><td>Harry Potter and the Prisoner of Azkaban (3)</td><td className="n">1,14%</td><td className="n">70,43%</td><td className="n">41,33</td></tr>
              <tr><td>Harry Potter and the Prisoner of Azkaban (3)</td><td>Harry Potter and the Chamber of Secrets (2)</td><td className="n">1,14%</td><td className="n">66,94%</td><td className="n">41,33</td></tr>
              <tr><td>Harry Potter and the Goblet of Fire (4)</td><td>Harry Potter and the Prisoner of Azkaban (3)</td><td className="n">1,04%</td><td className="n">62,71%</td><td className="n">36,80</td></tr>
              <tr><td>The Queen of the Damned</td><td>The Vampire Lestat</td><td className="n">0,65%</td><td className="n">57,50%</td><td className="n">34,00</td></tr>
              <tr><td>Hot Six: A Stephanie Plum Novel</td><td>High Five: A Stephanie Plum Novel</td><td className="n">0,55%</td><td className="n">57,35%</td><td className="n">56,56</td></tr>
            </tbody>
          </table>
        </div>
        <div className="note">Seluruh 50 aturan memiliki keterkaitan positif yang kuat — lift minimum 14,65, rata-rata 32,21. Namun 86% aturan berada pada confidence 30–60%, dan seluruhnya hanya melibatkan <strong>23 judul unik</strong> yang didominasi buku berseri.</div>
      </div>
      <div className="pageno">14</div>
    </section>
  );
}