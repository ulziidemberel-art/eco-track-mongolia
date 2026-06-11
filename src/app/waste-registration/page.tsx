import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2, Save } from "lucide-react";

export default function WasteRegistration() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Trash2 className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-900">Хог бүртгэх</h1>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Байгууллага
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Байгууллага сонгоно уу</option>
                  <option>MCS Coca-Cola</option>
                  <option>Ecosoum</option>
                  <option>Бусад</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Хог хаягдлын төрөл
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Төрөл сонгоно уу</option>
                  <option>Ахуйн хог</option>
                  <option>Үйлдвэрлэлийн хог</option>
                  <option>Аюултай хог</option>
                  <option>Эмнэлгийн хог</option>
                  <option>Барилгын хог</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тоо хэмжээ (кг)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Огноо
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тайлбар
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows={3}
                  placeholder="Нэмэлт тайлбар"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <Save className="mr-2 h-5 w-5" />
                Хадгалах
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
