export default function Card9() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-xs font-bold text-gray-600">
            Un mondo di avventure per tutti
          </p>
          <h1 className="text-5xl md:text-3xl font-bold leading-none tracking-tight -mt-5">
            DESTINATION YAMAHA MOTOR
          </h1>
          <p className="text-md text-gray-700 leading-relaxed font-bold">
            Destination Yamaha Motor è una piattaforma di viaggio online rivolta
            a tutti coloro che hanno una passione per l'avventura e il desiderio
            di scoprire nuove ed emozionanti esperienze con i mezzi Yamaha.
          </p>
          <button
            href="#"
            className="bg-black hover:bg-red-500 text-white hover:text-white border border-black font-semibold text-sm px-3 py-3 rounded-full flex items-center gap-3 transition-all duration-300"
          >
            Learn more
          </button>
        </div>
        <div className="relative h-[450px] w-[750px] ">
          <img
            src="/images/Yamaha/Destination Yamaha.jpg"
            alt="Destination Yamaha Motor"
            className="absolute inset-0  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
