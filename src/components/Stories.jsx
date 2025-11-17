function Stories() {
  const stories = [
    {
      quote: "I was able to complete my diploma without worrying about fees.",
      name: "Lebo, Gaborone",
    },
    {
      quote: "DTEF helped me study abroad and return to serve my community.",
      name: "Neo, Francistown",
    },
    {
      quote: "The process was fast and supportive from start to finish.",
      name: "Kago, Maun",
    },
  ];

  return (
    <section id="stories" className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Student stories</h2>
          <p className="mt-3 text-gray-600">Real journeys made possible through sponsorship.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <blockquote key={i} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-gray-800">“{s.quote}”</p>
              <footer className="mt-3 text-sm text-gray-600">— {s.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stories;
