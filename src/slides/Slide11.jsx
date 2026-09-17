
export default function Slide11() {
  return (
    <section className="slide" style={{ '--tint': 'var(--clay)' }}>
      <div className="spine"><span>BAB IV · Hasil</span></div>
      <h2>Arsitektur sistem</h2>
      <p className="sub">Menjawab rumusan masalah 1 — proses mining dipisahkan dari proses penyajian rekomendasi.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="arch">
          <div className="box">
            <h4>Mesin mining — PHP</h4>
            <p>Pra-pemrosesan, iterasi Apriori, pembentukan aturan, dan evaluasi. Dijalankan dari halaman Data Mining administrator, terpisah dari alur permintaan pengguna.</p>
          </div>
          <div className="arrow">→</div>
          <div className="box">
            <h4>Persistensi — MySQL</h4>
            <p>Aturan asosiasi beserta support, confidence, dan lift disimpan agar dapat dibaca ulang tanpa perhitungan baru.</p>
          </div>
          <div className="arrow">→</div>
          <div className="box">
            <h4>Penyajian — Web &amp; Android</h4>
            <p>Antarmuka website dan aplikasi mobile mengonsumsi himpunan aturan yang sama dari basis data.</p>
          </div>
        </div>
        <div className="aside">
          <h4>Di luar sistem berjalan — skrip uji Python (pandas, mlxtend)</h4>
          <p>Dipakai pada tahap awal penelitian untuk menguji kelayakan dataset Bookcrossing dan menetapkan konfigurasi parameter — minimum support 0,50%, confidence 30%, lift 1,20, rating ≥ 5, buku ≥ 20 peminjam, pengguna ≥ 3 buku. Hasilnya menjadi rujukan saat algoritma Apriori diimplementasikan ulang di sisi PHP. Skrip ini tidak dipanggil oleh website maupun aplikasi mobile.</p>
        </div>
        <div className="note">Beban komputasi iteratif Apriori tidak dirasakan pengguna saat membuka halaman rekomendasi, dan penambahan data transaksi baru cukup ditindaklanjuti dengan menjalankan ulang mining tanpa mengganggu ketersediaan layanan.</div>
      </div>
      <div className="pageno">11</div>
    </section>
  );
}