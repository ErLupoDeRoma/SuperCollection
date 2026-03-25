export default function Card4() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-start tracking-tight mb-12">
          PRENOTA UN TEST RIDE GRATUITO
        </h1>

        <div className="relative max-w-6xl mx-auto">
          <img 
            src="/images/Test Ride.webp" 
            alt="Yamaha Test Ride"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex justify-start -mt-20 ml-15 relative z-10">
          <button className="bg-white hover:bg-red-500 hover:text-white border-2 border-black text-black font-semibold text-lg px-12 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
            PRENOTA ORA 
            <span>→</span>
          </button>
        </div>
      </div>
    </>
  )
}