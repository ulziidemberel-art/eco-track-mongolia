import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Shield, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-emerald-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Бидний тухай</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Монгол Улсын хог хаягдлын бүртгэл, тайлангийн систем
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Зорилго</h3>
                <p className="text-gray-600">
                  Хог хаягдлын менежментийг дижиталжуулж, байгаль орчныг хамгаалах
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Аюулгүй байдал</h3>
                <p className="text-gray-600">
                  Төрийн журамд нийцсэн, аюулгүй бүртгэлийн систем
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Тогтвортой хөгжил</h3>
                <p className="text-gray-600">
                  Дахин боловсруулах, хог хаягдлыг бууруулах
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Хууль эрх зүй</h2>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <p className="text-gray-700 mb-4">
                Манай систем нь Монгол Улсын "Хог хаягдлын тухай" хууль болон Хог хаягдлын улсын тоо бүртгэл хөтлөх, тайлагнах журамд нийцсэн.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Хог хаягдлын тухай хууль (legalinfo.mn)</li>
                <li>Улсын тоо бүртгэлийн журам</li>
                <li>Байгаль орчны яамны мэдээлэл</li>
                <li>Олон улсын Switch-Asia төсөл</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
