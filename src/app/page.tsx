import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Building2, Trash2, FileText, TrendingUp, ArrowRight, Recycle, Factory, HeartPulse, HardHat, Landmark, Truck, Package } from "lucide-react";

const stats = [
  { icon: Building2, value: "100+", label: "Байгууллага" },
  { icon: Trash2, value: "1,000+", label: "Бүртгэл" },
  { icon: FileText, value: "50+", label: "Тайлан" },
];

const solutions = [
  {
    icon: Building2,
    title: "Байгууллага бүртгэх",
    description: "Шинэ байгууллага бүртгэж, мэдээллээ удирдана",
  },
  {
    icon: Trash2,
    title: "Хог бүртгэх",
    description: "Хог хаягдлын төрөл, тоо хэмжээг бүртгэнэ",
  },
  {
    icon: FileText,
    title: "Тайлан гаргах",
    description: "Автоматаар сарын тайлан гаргаж татаж авах",
  },
];

const industries = [
  { icon: Package, name: "Ахуйн хог" },
  { icon: Factory, name: "Үйлдвэрлэлийн хог" },
  { icon: HeartPulse, name: "Эмнэлгийн хог" },
  { icon: HardHat, name: "Барилгын хог" },
  { icon: Recycle, name: "Дахин боловсруулах" },
  { icon: Truck, name: "Тээвэрлэлт" },
];

const testimonials = [
  {
    quote: "EcoTrack систем нь бидний хог хаягдлын бүртгэлийг маш хялбар болгосон. Одоо тайлан гаргахад 5 минут л хүрч байна.",
    author: "Б. Батэрдэнэ",
    role: "Ахлах мэргэжилтэн, MCS Coca-Cola",
  },
  {
    quote: "Төрийн журамд нийцсэн тайланг автоматаар гаргадаг нь бидэнд маш их цаг хэмнэж байна.",
    author: "Г. Ганболд",
    role: "Менежер, Ecosoum",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Хог хаягдлын бүртгэлийн систем
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Байгууллагуудын хог хаягдлыг бүртгэж, тайлан гаргана
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/company-registration"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  Байгууллага бүртгэх
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/reports"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                >
                  Тайлан харах
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100"
                >
                  <stat.icon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Шийдлүүд
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Хог хаягдлын менежментийн бүрэн шийдэл
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <solution.icon className="h-12 w-12 text-emerald-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Үйлчилгээний чиглэл
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Янз бүрийн төрлийн хог хаягдлыг бүртгэх боломж
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <industry.icon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                  <div className="text-sm font-medium text-gray-900">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Хэрэглэгчдийн сэтгэгдэл
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                >
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Өнөөдөр эхлээрэй
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Хог хаягдлын бүртгэлээ эхлүүлж, тайлан гаргана уу
            </p>
            <Link
              href="/company-registration"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-emerald-600 bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Байгууллага бүртгэх
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
