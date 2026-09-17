
export default function Slide07() {
  return (
    <section className="slide" style={{ '--tint': 'var(--green)' }}>
      <div className="spine"><span>BAB II · Landasan Teori</span></div>
      <h2>Tiga ukuran penyaring aturan asosiasi</h2>
      <p className="sub">Aturan berbentuk <strong>A → B</strong>: pengguna yang meminjam buku A cenderung juga meminjam buku B.</p>
      <div className="hr"></div>
      <div className="body">
        <div className="formulas">
          <div className="f">
            <h4>Support</h4>
            <div className="eq">S(A→B) = <span className="frac"><span>n(A ∪ B)</span><span>N</span></span></div>
            <p>Seberapa sering pasangan buku muncul bersama di seluruh transaksi. Menyaring pola yang terlalu jarang.</p>
          </div>
          <div className="f">
            <h4>Confidence</h4>
            <div className="eq">C(A→B) = <span className="frac"><span>n(A ∪ B)</span><span>n(A)</span></span></div>
            <p>Dari seluruh peminjam A, berapa proporsi yang juga meminjam B. Mengukur kepastian prediktif aturan.</p>
          </div>
          <div className="f">
            <h4>Lift</h4>
            <div className="eq">L(A→B) = <span className="frac"><span>C(A→B)</span><span>S(B)</span></span></div>
            <p>Berapa kali peluang meminjam B meningkat setelah meminjam A. Nilai &gt; 1 berarti korelasi positif.</p>
          </div>
        </div>
        <div className="note">Prinsip anti-monoton Apriori: jika sebuah itemset tidak frequent, maka seluruh supersetnya pasti tidak frequent — inilah yang memangkas ruang pencarian pada setiap iterasi.</div>
      </div>
      <div className="pageno">07</div>
    </section>
  );
}