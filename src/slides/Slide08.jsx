
export default function Slide08() {
  return (
    <section className="slide" style={{ '--tint': 'var(--green)' }}>
      <div className="spine"><span>BAB III · Metode</span></div>
      <h2>Alur penelitian</h2>
      <p className="sub">Penelitian kuantitatif dengan pendekatan eksperimen, termasuk kategori penelitian terapan.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="three">
          <div className="col">
            <h4>Tahap data</h4>
            <ul className="dash">
              <li>Pengumpulan dataset Bookcrossing</li>
              <li>Pra-pemrosesan: cleaning, transformation, selection</li>
              <li>Pembagian data training dan testing (hold-out 80:20)</li>
            </ul>
          </div>
          <div className="col">
            <h4>Tahap pemodelan</h4>
            <ul className="dash">
              <li>Pembangkitan frequent itemset</li>
              <li>Pembentukan aturan asosiasi</li>
              <li>Evaluasi dengan presisi, recall, F1-score, dan lift</li>
              <li>Penyimpanan model aturan terpilih</li>
            </ul>
          </div>
          <div className="col">
            <h4>Tahap sistem</h4>
            <ul className="dash">
              <li>Desain sistem dengan pemodelan UML</li>
              <li>Implementasi mesin mining, backend, web, dan mobile</li>
              <li>Pengujian fungsionalitas dan performa</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pageno">08</div>
    </section>
  );
}