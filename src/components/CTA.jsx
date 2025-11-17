function CTA() {
  return (
    <section id="apply" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-1 shadow-xl">
          <div className="rounded-[22px] bg-white p-8 md:p-10 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">Ready to take the next step?</h3>
              <p className="mt-2 text-gray-600">Start your application today and let us help you achieve your academic goals.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
                Begin application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
