
export default function Slide18() {
  return (
    <section className="slide" style={{ '--tint': 'var(--green)' }}>
      <div className="spine"><span>BAB V · Penutup</span></div>
      <h2>Kesimpulan</h2>
      <div className="hr"></div>
      <div className="body">
        <ol className="num">
          <li><b>1</b><span><strong>Arsitektur.</strong> Sistem berhasil dirancang dengan memisahkan proses mining dari penyajian rekomendasi — mesin Apriori dan logika bisnis ditangani backend PHP, dengan persistensi aturan pada MySQL. Penambahan data baru cukup ditindaklanjuti dengan mining terjadwal tanpa mengganggu ketersediaan layanan.</span></li>
          <li><b>2</b><span><strong>Kinerja model.</strong> Pra-pemrosesan menyisakan 7.100 transaksi dari 1.030.543 rating dengan tingkat sparsity sangat tinggi. Konfigurasi terpilih — support 0,50%, confidence 30%, lift 1,20 — menghasilkan 482 frequent 1-itemset, 30 frequent 2-itemset, dan 50 aturan dengan rata-rata lift 32,21. Evaluasi hold-out memberi Precision@10 5,40%, Recall@10 8,65%, dan F1-Score 6,65%.</span></li>
          <li><b>3</b><span><strong>Implementasi.</strong> Model terintegrasi pada website (sisi pengguna dan administrator) serta aplikasi Android yang mengonsumsi aturan yang sama, dilengkapi halaman Cara Kerja sebagai jaminan transparansi perhitungan.</span></li>
        </ol>
      </div>
      <div className="pageno">18</div>
    </section>
  );
}