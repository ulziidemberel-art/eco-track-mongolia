import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, MapPin, Phone } from "lucide-react";

const companies = [
  { name: "MCS Coca-Cola", type: "Хүнсний үйлдвэр", phone: "+976 11 11 1111", address: "Улаанбаатар" },
  { name: "Ecosoum", type: "Дахин боловсруулах", phone: "+976 22 22 2222", address: "Булган аймаг" },
  { name: "Монголын Хог Хаягдлын Холбоо", type: "ТББ", phone: "+976 33 33 3333", address: "Улаанбаатар" },
  { name: "Caritas Czech", type: "Олон улсын ТББ", phone: "+976 44 44 4444", address: "Улаанбаатар" },
];

export default function Companies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">Бүртгэлтэй байгууллагууд</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.type}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {company.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {company.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
