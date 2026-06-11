import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Building2, Trash2, FileText, TrendingUp, ArrowRight, Recycle, Factory, HeartPulse, HardHat, AlertTriangle, Package, Truck } from "lucide-react";

const stats = [
  { icon: Building2, value: "100+", label: "Байгууллага" },
  { icon: Trash2, value: "1,000+", label: "Бүртгэл" },
  { icon: FileText, value: "50+", label: "Тайлан" },
];

const wasteTypes = [
  { 
    icon: Package, 
    name: "Ахуйн хог", 
    desc: "Гэр ахуйн өдөр тутмын хог хаягдал",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    hoverColor: "hover:border-blue-400"
  },
  { 
    icon: Factory, 
    name: "Үйлдвэрлэлийн хог", 
    desc: "Үйлдвэр, цехээс гарах хог",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200",
    hoverColor: "hover:border-orange-400"
  },
  { 
    icon: AlertTriangle, 
    name: "Аюултай хог", 
    desc: "Химийн бодис, аюултай хог хаягдал",
    color: "bg-red-50",
    iconColor: "text-red-600",
    borderColor: "border-red-200",
    hoverColor: "hover:border-red-400"
  },
  { 
    icon: HeartPulse, 
    name: "Эмнэлгийн хог", 
    desc: "Эмнэлэгээс гарах хог хаягдал",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    borderColor: "border-pink-200",
    hoverColor: "hover:border-pink-400"
  },
  { 
    icon: HardHat, 
    name: "Барилгын хог", 
    desc: "Барилга, буулгалтын хог",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-200",
    hoverColor: "hover:border-yellow-400"
  },
  { 
    icon: Recycle, 
    name: "Дахин боловсруулах", 
    desc: "Дахин боловсруулах боломжтой хог",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    hoverColor: "hover:border-emerald-400"
  },
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
        {/* Hero Section with Animated Background */}
        <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Buildings - Left Side */}
            <div className="absolute left-10 top-20 opacity-20 animate-float-slow">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                <rect x="20" y="80" width="40" height="120" fill="#10B981" rx="4"/>
                <rect x="25" y="90" width="12" height="12" fill="white" rx="2"/>
                <rect x="43" y="90" width="12" height="12" fill="white" rx="2"/>
                <rect x="25" y="110" width="12" height="12" fill="white" rx="2"/>
                <rect x="43" y="110" width="12" height="12" fill="white" rx="2"/>
                <rect x="25" y="130" width="12" height="12" fill="white" rx="2"/>
                <rect x="43" y="130" width="12" height="12" fill="white" rx="2"/>
                <rect x="25" y="150" width="12" height="12" fill="white" rx="2"/>
                <rect x="43" y="150" width="12" height="12" fill="white" rx="2"/>
                <rect x="20" y="70" width="40" height="10" fill="#059669" rx="2"/>
              </svg>
            </div>

            {/* Factory Building */}
            <div className="absolute right-20 top-32 opacity-15 animate-float-medium">
              <svg width="150" height="160" viewBox="0 0 150 160" fill="none">
                <rect x="30" y="60" width="80" height="100" fill="#059669" rx="4"/>
                <rect x="40" y="20" width="15" height="50" fill="#6B7280" rx="2"/>
                <rect x="65" y="35" width="15" height="35" fill="#6B7280" rx="2"/>
                <rect x="90" y="25" width="15" height="45" fill="#6B7280" rx="2"/>
                <rect x="45" y="75" width="20" height="15" fill="white" rx="2"/>
                <rect x="75" y="75" width="20" height="15" fill="white" rx="2"/>
                <rect x="45" y="100" width="20" height="15" fill="white" rx="2"/>
                <rect x="75" y="100" width="20" height="15" fill="white" rx="2"/>
                <circle cx="95" cy="40" r="8" fill="#EF4444" opacity="0.5"/>
              </svg>
            </div>

            {/* Recycling Symbol */}
            <div className="absolute left-1/4 bottom-20 opacity-10 animate-float-fast">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M50 15 L60 35 L40 35 Z" fill="#10B981"/>
                <path d="M70 65 L50 75 L60 55 Z" fill="#10B981"/>
                <path d="M30 65 L40 75 L20 55 Z" fill="#10B981"/>
                <path d="M50 45 L55 55 L45 55 Z" fill="white"/>
              </svg>
            </div>

            {/* House with Tree */}
            <div className="absolute right-1/3 bottom-32 opacity-15 animate-float-slow">
              <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
                <rect x="50" y="50" width="60" height="50" fill="#34D399" rx="4"/>
                <polygon points="80,20 40,55 120,55" fill="#059669"/>
                <rect x="65" y="65" width="15" height="20" fill="white" rx="2"/>
                <rect x="90" y="65" width="15" height="15" fill="white" rx="2"/>
                <circle cx="25" cy="55" r="20" fill="#10B981" opacity="0.6"/>
                <circle cx="20" cy="45" r="15" fill="#34D399" opacity="0.5"/>
                <rect x="22" y="65" width="6" height="25" fill="#8B5CF6" rx="2"/>
              </svg>
            </div>

            {/* Hospital */}
            <div className="absolute left-1/3 top-40 opacity-10 animate-float-medium">
              <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
                <rect x="20" y="40" width="60" height="70" fill="#EC4899" rx="4"/>
                <rect x="40" y="50" width="8" height="25" fill="white" rx="2"/>
                <rect x="32" y="58" width="24" height="8" fill="white" rx="2"/>
                <rect x="35" y="85" width="15" height="15" fill="white" rx="2"/>
                <rect x="55" y="85" width="15" height="15" fill="white" rx="2"/>
                <rect x="35" y="25" width="30" height="20" fill="#F472B6" rx="2"/>
                <rect x="47" y="28" width="6" height="14" fill="white" rx="1"/>
                <rect x="43" y="32" width="14" height="6" fill="white" rx="1"/>
              </svg>
            </div>

            {/* Construction Crane */}
            <div className="absolute right-10 bottom-10 opacity-10 animate-float-fast">
              <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                <rect x="55" y="40" width="10" height="80" fill="#F59E0B" rx="2"/>
                <rect x="20" y="40" width="80" height="8" fill="#F59E0B" rx="2"/>
                <rect x="25" y="20" width="5" height="25" fill="#FBBF24" rx="1"/>
                <rect x="90" y="20" width="5" height="25" fill="#FBBF24" rx="1"/>
                <line x1="27" y1="25" x2="27" y2="60" stroke="#1F2937" strokeWidth="2"/>
                <line x1="92" y1="25" x2="92" y2="60" stroke="#1F2937" strokeWidth="2"/>
                <rect x="40" y="60" width="40" height="50" fill="#D97706" rx="2"/>
                <rect x="45" y="70" width="12" height="12" fill="white" rx="2"/>
                <rect x="63" y="70" width="12" height="12" fill="white" rx="2"/>
                <rect x="45" y="88" width="12" height="12" fill="white" rx="2"/>
                <rect x="63" y="88" width="12" height="12" fill="white" rx="2"/>
              </svg>
            </div>

            {/* Floating Particles */}
            <div className="absolute left-1/2 top-1/4 w-3 h-3 bg-emerald-300 rounded-full opacity-30 animate-float-particle-1"></div>
            <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-float-particle-2"></div>
            <div className="absolute left-1/4 bottom-1/4 w-4 h-4 bg-emerald-200 rounded-full opacity-25 animate-float-particle-3"></div>
            <div className="absolute right-1/2 top-1/2 w-2 h-2 bg-emerald-300 rounded-full opacity-20 animate-float-particle-1"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-lg hover:shadow-xl"
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

        {/* Waste Types Selection - NEW SECTION */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Та ямар хог хаях гэж байна?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Хог хаягдлын төрлөө сонгоод шууд бүртгэлээ хийнэ үү
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wasteTypes.map((waste) => (
                <Link
                  key={waste.name}
                  href="/waste-registration"
                  className={`${waste.color} rounded-xl p-8 border-2 ${waste.borderColor} ${waste.hoverColor} hover:shadow-lg transition-all group cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`h-20 w-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <waste.icon className={`h-10 w-10 ${waste.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{waste.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{waste.desc}</p>
                    <div className="flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Бүртгэх
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-xl p-8 text-center shadow-sm border border-gray-100"
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
        <section className="bg-gray-50 py-20">
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
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
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
        <section className="bg-white py-20">
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
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <industry.icon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                  <div className="text-sm font-medium text-gray-900">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20">
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
                  className="bg-white rounded-xl p-8 border border-gray-100"
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
