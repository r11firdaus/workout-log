import Image from "next/image";
import Link from "next/link";

export default function KatalogTanam() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="bg-emerald-600 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">GreenTech</h1>
          <div className="space-x-4 font-medium">
            {/* Menggunakan komponen Link bawaan Next.js agar pindah halaman instan tanpa loading browser */}
            <Link href="/" className="hover:text-emerald-200 transition-colors">Fitness App</Link>
            <Link href="/katalog" className="text-emerald-200 border-b-2 border-emerald-200">Katalog</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Masa Depan Berkebun di Lahan Sempit
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Temukan metode revolusioner menanam sayuran pertumbuhhan cepat tanpa menggunakan tanah. Lebih bersih, lebih efisien, dan hemat air.
        </p>
      </section>

      {/* --- GRID KONTEN (RESPONSIF) --- */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        {/* Ini inti Tailwind! grid biasa untuk HP, md:grid-cols-2 untuk layar laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kartu Aeroponik */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
            {/* Area kosong untuk simulasi gambar/ilustrasi menara aeroponik */}
            <Image
              src="https://www.farminghydroponics.com/wp-content/uploads/2025/01/Aeroponics-System.jpg" // Pastikan ada gambar ini di folder 'public'
              alt="Sistem Aeroponik"
              width={500} 
              height={300}
              className="rounded-lg object-cover"
            />
            {/* <div className="h-48 bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-500 font-bold text-xl">[Ilustrasi Tower Aeroponik]</span>
            </div> */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-emerald-700">Sistem Aeroponik</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">
                Akar tanaman menggantung di udara dan disemprot dengan kabut nutrisi secara berkala. Sirkulasi oksigen maksimal membuat akar bernapas bebas, mendorong pertumbuhan sayuran dengan sangat cepat dan mencegah pembusukan akar.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>Sangat hemat air (hingga 95% dibanding tanah)</li>
                <li>Butuh pompa bertekanan tinggi</li>
                <li>Cocok untuk sayuran daun (selada, pakcoy)</li>
              </ul>
            </div>
          </div>

          {/* Kartu Hidroponik */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
            {/* Area kosong untuk simulasi gambar sistem pipa */}
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xl">[Ilustrasi Pipa Hidroponik NFT]</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-700">Sistem Hidroponik (NFT)</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">
                Tanaman diletakkan pada talang air tipis yang dialiri nutrisi secara terus-menerus. Sangat populer untuk skala komersial maupun rumahan karena perawatannya yang relatif mudah dipahami bagi pemula.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>Stabilitas suhu air lebih mudah dijaga</li>
                <li>Menggunakan media tanam seperti rockwool</li>
                <li>Rentang jenis tanaman lebih luas</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}