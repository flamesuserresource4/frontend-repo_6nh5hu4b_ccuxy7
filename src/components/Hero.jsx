import { Sparkles, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-60" />
        <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-blue-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
            <Sparkles size={14} /> Empowering Botswana's learners
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Fund your studies with confidence through DTEF
          </h1>
          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-xl">
            We support students across Botswana at every level — from certificate to postgraduate —
            partnering with institutions and sponsors to make education accessible.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
              Start your application
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-blue-700 font-semibold border border-blue-200 hover:bg-blue-50">
              See how it works
            </a>
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Tuition & allowances covered</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Local & international institutions</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Merit and need-based support</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Quick, transparent process</li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square md:aspect-[4/5] rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 p-1 shadow-xl">
            <div className="h-full w-full rounded-3xl bg-white p-6 grid grid-rows-3 gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 p-4">
                <p className="text-sm font-semibold text-blue-700">Scholarship Portal</p>
                <p className="text-xs text-gray-600 mt-1">Track applications and disbursements</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-blue-600/90 text-white p-4">
                  <p className="text-2xl font-extrabold">12k+</p>
                  <p className="text-xs opacity-90">Students funded</p>
                </div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-sm font-semibold text-blue-700">All Levels</p>
                  <p className="text-xs text-gray-600 mt-1">Certificate to Masters</p>
                </div>
                <div className="rounded-2xl bg-sky-50 border border-blue-100 p-4">
                  <p className="text-sm font-semibold text-blue-700">Botswana</p>
                  <p className="text-xs text-gray-600 mt-1">Local focus, global reach</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-4">
                <p className="text-sm font-semibold text-blue-700">Partner Network</p>
                <div className="mt-2 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-600" />
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Growing every semester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
