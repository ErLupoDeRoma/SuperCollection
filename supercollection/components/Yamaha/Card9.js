export default function Card8() {
  return (
    <div className="relative h-screen ml-80 mr-80 mb-20 mt-20">      
      <img
        src="/images/ABOUT US.webp"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-lg px-8 md:px-16 lg:px-24">
          <h1 className="text-white text-5xl font-bold mb-6">ABOUT US</h1>
          
          <p className="text-white text-lg mb-10">
            Che tu voglia <strong>CORRERE</strong> più velocemente, 
            <strong>SENTIRE</strong> la passione della guida o trovare 
            la soluzione migliore per <strong>MUOVERSI</strong> in modo più 
            intelligente, i nostri prodotti e servizi sono gli unici che possono 
            offrirti l' esperienza Kando.
          </p>
          <button className="bg-white hover:bg-red-500 hover:text-white border border-black text-black font-semibold text-sm px-7 py-3 rounded-full flex items-center gap-3 transition-all duration-300">
            SCOPRI YAMAHA
          </button>
        </div>
      </div>
    </div>
  );
}