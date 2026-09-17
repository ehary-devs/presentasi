
export default function Slide17() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Uji reprodusibilitas</h2>
      <p className="sub">Skenario 2 dieksekusi ulang pada waktu berbeda dengan parameter identik.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="tablewrap">
          <table>
            <thead>
              <tr><th>Metrik</th><th className="n">Eksekusi pertama</th><th className="n">Eksekusi ulang</th><th className="n">Selisih</th></tr>
            </thead>
            <tbody>
              <tr><td>Transaksi terbentuk</td><td className="n">7.100</td><td className="n">7.100</td><td className="n">0</td></tr>
              <tr><td>Frequent 1-itemset / 2-itemset</td><td className="n">482 / 30</td><td className="n">482 / 30</td><td className="n">0</td></tr>
              <tr><td>Jumlah aturan</td><td className="n">50</td><td className="n">50</td><td className="n">0</td></tr>
              <tr><td>Precision@10</td><td className="n">5,4019%</td><td className="n">5,4019%</td><td className="n">0</td></tr>
              <tr><td>Recall@10</td><td className="n">8,6506%</td><td className="n">8,6506%</td><td className="n">0</td></tr>
              <tr><td>F1-Score</td><td className="n">6,6507%</td><td className="n">6,6507%</td><td className="n">0</td></tr>
              <tr><td>Rata-rata lift</td><td className="n">32,210059</td><td className="n">32,210059</td><td className="n">0</td></tr>
              <tr><td>Durasi komputasi</td><td className="n">8 detik</td><td className="n">6 detik</td><td className="n">2 detik</td></tr>
            </tbody>
          </table>
        </div>
        <div className="note">Seluruh metrik statistik identik. Determinisme dicapai melalui dua keputusan rancangan: pembentukan transaksi berdasarkan pengurutan user_id dan ISBN, serta pembagian hold-out 80:20 berbasis urutan ISBN — sehingga hasil dapat direproduksi secara konsisten.</div>
      </div>
      <div className="pageno">17</div>
    </section>
  );
}