
export default function Slide13() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Hasil iterasi algoritma Apriori</h2>
      <p className="sub">Parameter terpilih: minimum support 0,50% · minimum confidence 30% · minimum lift 1,20 · 7.100 transaksi.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="tablewrap">
          <table>
            <thead>
              <tr><th>Tahap</th><th className="n">Kandidat</th><th className="n">Lolos</th><th className="n">Rasio</th><th className="n">Waktu</th><th>Keterangan</th></tr>
            </thead>
            <tbody>
              <tr><td>Iterasi 1 — 1-itemset</td><td className="n">2.021</td><td className="n">482</td><td className="n">23,85%</td><td className="n">&lt; 1 dtk</td><td>ISBN dengan support ≥ 0,50%</td></tr>
              <tr><td>Iterasi 2 — 2-itemset</td><td className="n">115.921</td><td className="n">30</td><td className="n">0,03%</td><td className="n">± 4 dtk</td><td>Penyusutan drastis akibat data sparsity</td></tr>
              <tr><td>Pembentukan aturan</td><td className="n">60</td><td className="n">50</td><td className="n">83,33%</td><td className="n">&lt; 1 dtk</td><td>10 aturan gugur karena confidence &lt; 30%</td></tr>
            </tbody>
            <tfoot>
              <tr><td colSpan="4">Total proses — termasuk pra-pemrosesan, mining, evaluasi, dan persistensi</td><td className="n">± 6 dtk</td><td></td></tr>
            </tfoot>
          </table>
        </div>
        <div className="note">Penyusutan 2-itemset dari 115.921 menjadi 30 terjadi karena rata-rata transaksi hanya berisi 8,70 buku, jauh lebih kecil dibanding luas ruang katalog yang dianalisis (2.022 judul).</div>
      </div>
      <div className="pageno">13</div>
    </section>
  );
}