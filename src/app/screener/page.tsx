import Link from "next/link";

// 1. Definisikan tipe data saham kita
interface StockData {
  symbol: string;
  company: string;
  price: number;
  changePercent: number;
  volume: string;
  action: "Buy" | "Hold" | "Sell"; // Rekomendasi berdasarkan analisis (dummy)
}

// 2. Simulasi fungsi pengambilan data dari API/Database
// Perhatikan penggunaan 'async'
async function getWatchlist(): Promise<StockData[]> {
  // Kita sengaja menahan proses ini selama 2 detik agar Anda bisa melihat
  // efek loading.tsx bekerja dengan sempurna!
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mengembalikan data mentah
  return [
    { symbol: "BBCA", company: "Bank Central Asia Tbk", price: 9850, changePercent: 1.2, volume: "45M", action: "Hold" },
    { symbol: "GOTO", company: "GoTo Gojek Tokopedia Tbk", price: 68, changePercent: -4.5, volume: "1.2B", action: "Sell" },
    { symbol: "ABDI", company: "PT Abadi Lestari Indonesia", price: 450, changePercent: 8.4, volume: "25M", action: "Buy" },
    { symbol: "TLKM", company: "Telkom Indonesia Tbk", price: 3150, changePercent: 0.5, volume: "80M", action: "Hold" },
  ];
}

// 3. Komponen Utama (Juga menggunakan 'async'!)
export default async function ScreenerPage() {
  // Kita langsung 'await' datanya. Sesederhana ini di Next.js!
  const stocks = await getWatchlist();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
          <h1 className="text-3xl font-bold text-emerald-400">Watchlist Screener</h1>
          <Link href="/" className="text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors">
            Kembali
          </Link>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Simbol</th>
                <th className="p-4 font-medium">Perusahaan</th>
                <th className="p-4 font-medium text-right">Harga (Rp)</th>
                <th className="p-4 font-medium text-right">Perubahan</th>
                <th className="p-4 font-medium text-right">Volume</th>
                <th className="p-4 font-medium text-center">Sinyal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {stocks.map((stock) => (
                <tr key={stock.symbol} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-bold text-emerald-300">{stock.symbol}</td>
                  <td className="p-4 text-slate-300 truncate max-w-[150px]">{stock.company}</td>
                  <td className="p-4 text-right font-medium">{stock.price.toLocaleString("id-ID")}</td>
                  
                  {/* Logika warna merah/hijau otomatis berdasarkan nilai minus/plus */}
                  <td className={`p-4 text-right font-bold ${stock.changePercent < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%
                  </td>
                  
                  <td className="p-4 text-right text-slate-400">{stock.volume}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                      ${stock.action === 'Buy' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 
                        stock.action === 'Sell' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                        'bg-slate-600/50 text-slate-300 border border-slate-500'}`}
                    >
                      {stock.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}