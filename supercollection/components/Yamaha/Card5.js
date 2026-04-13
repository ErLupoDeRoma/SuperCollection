export default function Card5() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden w-full md:w-1/2 lg:w-full">
            <img 
              src="/images/Yamaha/Card2:1.webp" 
              className="w-full h-full object-cover brightness-80"
            />
            <div className="absolute bottom-8 left-0 right-0 px-8 text-center lg:text-left lg:left-8 lg:right-auto text-white">
              <h2 className="text-3xl font-bold">NUOVA STAGIONE,<br />NUOVI ACCESSORI</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden w-full md:w-1/2 lg:w-full">
            <img 
              src="/images/Yamaha/Card2:2.webp" 
              className="w-full h-full object-cover brightness-80"
            />
            <div className="absolute bottom-8 left-0 right-0 px-8 text-center lg:text-left lg:left-8 lg:right-auto text-white">
              <p className="text-sm tracking-widest">CASCO AIROH LIMITED EDITION</p>
              <h2 className="text-3xl font-bold">INDOSSA LA STORIA</h2>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
