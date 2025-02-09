
import Link from "next/link";



export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-900 text-gray-300">
            <Link
                href="/"
                className="uppercase font-bold text-md h-12 flex items-center">
                Next Stor
            </Link>
            <div className="flex items-center gap-8">

               
                <button className="border rounded-md border-gray-400 px-3 py-2 hover:bg-slate-800">
                    Fazer login
                </button>
             

            </div>

        </nav>
    );
}