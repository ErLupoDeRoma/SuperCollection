export default function ProssimiEventi() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex justify-between items-center mb-10 px-2">
          <h2 className="text-4xl font-bold tracking-wider">
            PROSSIMI EVENTI
          </h2>
          <h1 href="#" className="text-black font-medium hover:underline flex items-center gap-1">
            Visualizza tutto →
          </h1>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white overflow-hidden">
            <img 
              src="/images/Yamaha/Prima Tappa.png"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-gray-600 text-sm">
                18 - 19 Apr 2026 • Bobbio (PC)
              </h1>
              <h3 className="text-xl font-bold mt-2 mb-3">
                HAT SERIES ADVENTOURFEST - 1° TAPPA
              </h3>
              <h1 className="text-gray-700 text-xs line-clamp-4">
                L'HAT Adventourfest è un evento dedicato agli appassionati di mototurismo-avventura. 
                Una grande manifestazione all'aperto durante la quale sarà possibile provare il nostro...
              </h1>
              <h1 href="#" className="inline-block mt-5 text-black font-semibold hover:underline">
                Scopri di più →
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white overflow-hidden ">
            <img 
              src="/images/Yamaha/STRAMILANO 2026.png"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                03 Mag 2026 • Milano (MI)
              </p>
              <h3 className="text-xl font-bold mt-2 mb-3">
                STRAMILANO 2026
              </h3>
              <p className="text-gray-700 text-[15px] line-clamp-4">
                Yamaha è sponsor ufficiale della Stramilano Half Marathon, che vedrà migliaia di runner...
              </p>
              <h1 href="#" className="inline-block mt-5 text-black font-semibold hover:underline">
                Scopri di più →
              </h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white  overflow-hidden">
            <img 
              src="/images/Yamaha/Prima Tappa.png"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                08 + 10 Mag 2026 • Autodromo di Varano de' Melegari, Parma
              </p>
              <h3 className="text-xl font-bold mt-2 mb-3">
                ASI MOTOSHOW
              </h3>
              <p className="text-gray-700 text-[15px] line-clamp-4">
                Vieni a trovarci alla 23ª edizione di ASI MotoShow, in programma dall'8 al 10 maggio 2026...
              </p>
              <h1 href="#" className="inline-block mt-5 text-black font-semibold hover:underline">
                Scopri di più →
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}