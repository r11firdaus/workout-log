import Link from "next/link";

const NavBar = () => {
  return (
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
  )
}

export default NavBar