export default function Loading() {
  // Ini adalah efek "Skeleton" menggunakan Tailwind (class 'animate-pulse')
  return (
    <main className="min-h-screen bg-slate-900 p-8 font-sans flex flex-col items-center justify-center">
      <div className="text-emerald-400 text-2xl font-bold mb-4 animate-pulse">
        Menghubungkan ke Bursa...
      </div>
      {/* Kotak-kotak loading tiruan */}
      <div className="w-full max-w-3xl space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-16 bg-slate-800 rounded-lg animate-pulse border border-slate-700"></div>
        ))}
      </div>
    </main>
  );
}