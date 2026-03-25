export default function Card5() {
  return (
    <>
      <div className="w-7xl mx-auto px-6 py-16 bg-white">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden">
            <img 
              src="/images/Card2:1.webp" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold">NUOVA STAGIONE,<br />NUOVI ACCESSORI</h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img 
              src="/images/Card2:2.webp" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm tracking-widest">CASCO AIROH LIMITED EDITION</p>
              <h2 className="text-3xl font-bold">INDOSSA LA STORIA</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}