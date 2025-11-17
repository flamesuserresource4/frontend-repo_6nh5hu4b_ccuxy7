import { FileCheck2, Layers, BadgeCheck } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Check Eligibility",
      desc: "Answer a few questions about your program, institution, and financial need.",
      icon: <BadgeCheck className="text-blue-600" size={20} />,
    },
    {
      step: "2",
      title: "Apply Online",
      desc: "Submit your application with required documents securely through our portal.",
      icon: <Layers className="text-blue-600" size={20} />,
    },
    {
      step: "3",
      title: "Get Funded",
      desc: "Receive approval updates and funding disbursements directly to your institution or account.",
      icon: <FileCheck2 className="text-blue-600" size={20} />,
    },
  ];

  return (
    <section id="how" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Simple, supportive, and built for students at every level.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center text-sm font-bold shadow">
                {s.step}
              </div>
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 mb-3">
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
