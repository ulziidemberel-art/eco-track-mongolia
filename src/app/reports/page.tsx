import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, TrendingUp } from "lucide-react";

const reports = [
  { month: "2026-06", company: "MCS Coca-Cola", type: "Ахуйн хог", amount: "1,250 кг", status: "Баталгаажсан" },
  { month: "2026-06", company: "Ecosoum", type: "Дахин боловсруулах", amount: "890 кг", status: "Хүлээгдэж байна" },
  { month: "2026-05", company: "MCS Coca-Cola", type: "Ахуйн хог", amount: "1,180 кг", status: "Баталгаажсан" },
  { month: "2026-05", company: "Ecosoum", type: "Дахин боловсруулах", amount: "750 кг", status: "Баталгаажсан" },
];

export default function Reports() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-900">Тайлан</h1>
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors">
              <Download className="mr-2 h-4 w-4" />
              Бүгдийг татах
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <TrendingUp className="h-4 w-4" />
                Нийт хог
              </div>
              <div className="text-2xl font-bold text-gray-900">4,070 кг</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FileText className="h-4 w-4" />
                Тайлан
              </div>
              <div className="text-2xl font-bold text-gray-900">4</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <TrendingUp className="h-4 w-4" />
                Баталгаажсан
              </div>
              <div className="text-2xl font-bold text-emerald-600">3</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Сар</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Байгууллага</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Төрөл</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Хэмжээ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Төлөв</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Үйлдэл</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.status === "Баталгаажсан" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-emerald-600 hover:text-emerald-900">Татах</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
