export default function Card4(C4) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h1 className="text-4xl md:text-4xl font-bold text-start tracking-tight mb-10 ml-10">
          {C4.titolo}
        </h1>

        <div className="relative max-w-6xl mx-auto">
          <img 
            src="/images/Test Ride.webp"
            className="w-full h-auto object-cover brightness-80"
          />
        </div>

        <div className="flex justify-start -mt-20 ml-15 relative z-10">
          <button className="bg-white hover:bg-red-500 hover:text-white border-2 border-black text-black font-semibold text-lg px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
            {C4.bottone}
          </button>
        </div>
      </div>
    </>
  )
}