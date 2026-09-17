
export default function Slide10() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Hasil pra-pemrosesan data</h2>
      <p className="sub">Penyusutan data dari record mentah hingga himpunan transaksi yang siap di-mining.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="funnel">
          <div className="step"><div className="lbl">Rating mentah</div><div><div className="bar" style={{ width: '100%' }}></div></div><div className="val">1.030.543</div></div>
          <div className="step"><div className="lbl">Peminjaman tercatat (rating ≥ 5)</div><div><div className="bar" style={{ width: '35.6%' }}></div></div><div className="val">367.036</div></div>
          <div className="step"><div className="lbl">Buku lolos ambang ≥ 20 peminjam</div><div><div className="bar" style={{ width: '8%' }}></div></div><div className="val">2.022</div></div>
          <div className="step"><div className="lbl">Transaksi terbentuk (≥ 3 buku)</div><div><div className="bar" style={{ width: '11%' }}></div></div><div className="val">7.100</div></div>
          <div className="step"><div className="lbl">Rata-rata item per transaksi</div><div><div className="bar" style={{ width: '3%' }}></div></div><div className="val">8,70</div></div>
        </div>
        <div className="note">Hanya <strong>2.022 dari 271.045 judul (0,75%)</strong> memenuhi syarat analisis, sementara 99,25% sisanya tidak cukup sering dipinjam bersama. Inilah kondisi <strong>data sparsity</strong> yang menjadi karakteristik utama data perpustakaan dan melandasi seluruh pemilihan parameter berikutnya.</div>
      </div>
      <div className="pageno">10</div>
    </section>
  );
}