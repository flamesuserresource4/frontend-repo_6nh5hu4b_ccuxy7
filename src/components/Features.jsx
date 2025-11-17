import { ShieldCheck, Coins, Globe, Clock3 } from "lucide-react";

function Features() {
  const items = [
    {
      icon: <ShieldCheck className="text-blue-600" size={22} />,
      title: "Trusted & Transparent",
      desc: "Clear eligibility, fair assessment, and real-time tracking for peace of mind.",
    },
    {
      icon: <Coins className="text-blue-600" size={22} />,
      title: "Comprehensive Coverage",
      desc: "Tuition, living allowance, books and travel — tailored to your program.",
    },
    {
      icon: <Globe className="text-blue-600" size={22} />,
      title: "Local & International",
      desc: "Support for accredited institutions in Botswana and abroad.",
    },
    {
      icon: <Clock3 className="text-blue-600" size={22} />,
      title: "Fast Processing",
      desc: "Streamlined steps with status updates at every stage.",
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Why choose DTEF</h2>
          <p className="mt-3 text-gray-600">We exist to remove financial barriers so you can focus on learning.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 mb-3">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
