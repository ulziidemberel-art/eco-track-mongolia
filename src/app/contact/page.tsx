import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Холбоо барих</h1>
              <p className="text-gray-600 mb-8">
                Асуулт, санал хүсэлт байвал бидэнтэй холбогдоно уу.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Утас</div>
                    <div className="text-gray-600">+976 11 11 1111</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">И-мэйл</div>
                    <div className="text-gray-600">info@ecotrack.mn</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Хаяг</div>
                    <div className="text-gray-600">Улаанбаатар, Монгол</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Нэр</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Нэр оруулна уу"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">И-мэйл</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="И-мэйл оруулна уу"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Мессеж</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    rows={4}
                    placeholder="Мессеж оруулна уу"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
