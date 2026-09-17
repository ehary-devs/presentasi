
export default function Slide15() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Perbandingan enam skenario parameter</h2>
      <p className="sub">Menjawab tujuan 1 — penetapan ambang berbasis karakteristik data, bukan angka konvensional.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="tablewrap">
          <table>
            <thead>
              <tr><th>Skenario</th><th className="n">Min. sup</th><th className="n">Min. conf</th><th className="n">L₁</th><th className="n">L₂</th><th className="n">Aturan</th><th className="n">Precision@10</th><th className="n">Recall@10</th><th className="n">F1</th><th className="n">User cov.</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td className="n">0,30%</td><td className="n">30%</td><td className="n">1.030</td><td className="n">114</td><td className="n">142</td><td className="n">4,32%</td><td className="n">6,02%</td><td className="n">5,03%</td><td className="n">17,70%</td></tr>
              <tr className="pick"><td>2 — terpilih</td><td className="n">0,50%</td><td className="n">30%</td><td className="n">482</td><td className="n">30</td><td className="n">50</td><td className="n">5,40%</td><td className="n">8,65%</td><td className="n">6,65%</td><td className="n">5,55%</td></tr>
              <tr><td>3</td><td className="n">1,00%</td><td className="n">30%</td><td className="n">135</td><td className="n">3</td><td className="n">6</td><td className="n">3,26%</td><td className="n">2,72%</td><td className="n">2,96%</td><td className="n">1,30%</td></tr>
              <tr><td>4</td><td className="n">0,50%</td><td className="n">50%</td><td className="n">482</td><td className="n">30</td><td className="n">20</td><td className="n">11,05%</td><td className="n">12,57%</td><td className="n">11,76%</td><td className="n">2,55%</td></tr>
              <tr><td>5</td><td className="n">0,50%</td><td className="n">70%</td><td className="n">482</td><td className="n">30</td><td className="n">2</td><td className="n">0,00%</td><td className="n">0,00%</td><td className="n">0,00%</td><td className="n">0,00%</td></tr>
              <tr><td>6</td><td className="n">10,00%</td><td className="n">30%</td><td className="n">0</td><td className="n">0</td><td className="n">0</td><td className="n">0,00%</td><td className="n">0,00%</td><td className="n">0,00%</td><td className="n">0,00%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="note">Ambang yang lazim pada analisis ritel terbukti tidak dapat dipindahkan begitu saja: <strong>min. support 10% tidak menghasilkan frequent itemset sama sekali</strong>, dan <strong>min. confidence 70% hanya menyisakan 2 aturan</strong> dengan seluruh metrik bernilai nol. Skenario 2 dipilih sebagai titik seimbang antara ketepatan dan jangkauan pengguna.</div>
      </div>
      <div className="pageno">15</div>
    </section>
  );
}