import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold text-white">EcoTrack</span>
            </div>
            <p className="text-sm text-gray-400">
              Монгол Улсын хог хаягдлын бүртгэл, тайлангийн систем
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Үндсэн
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-emerald-400 transition-colors">Нүүр</Link></li>
              <li><Link href="/about" className="text-sm hover:text-emerald-400 transition-colors">Бидний тухай</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">Холбоо барих</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Үйлчилгээ
            </h3>
            <ul className="space-y-2">
              <li><Link href="/company-registration" className="text-sm hover:text-emerald-400 transition-colors">Байгууллага бүртгэх</Link></li>
              <li><Link href="/waste-registration" className="text-sm hover:text-emerald-400 transition-colors">Хог бүртгэх</Link></li>
              <li><Link href="/reports" className="text-sm hover:text-emerald-400 transition-colors">Тайлан</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Холбоо барих
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4" /> +976 11 11 1111</li>
              <li className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4" /> info@ecotrack.mn</li>
              <li className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /> Улаанбаатар, Монгол</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 EcoTrack Mongolia. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </footer>
  );
}
