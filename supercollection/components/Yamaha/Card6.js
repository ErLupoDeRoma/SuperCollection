export default function ExperienceYamaha() {
  return (
    <div className="bg-white py-12 px-4 mx-auto">
      <div className="max-w-7xl mx-auto">
        
        
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wider">
          EXPERIENCE YAMAHA
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/images/Girl FP.webp"
              className="w-full h-full object-cover brightness-80"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-2xl font-bold">
                INSIEME IN OGNI AVVENTURA
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg ">
            <img 
              src="/images/Parter Tecnici.webp"
              className="w-full h-full object-cover brightness-80"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-2xl font-bold">
                PARTNER TECNICI
              </h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/images/Noleggia Moto.webp"
              className="w-full h-full object-cover brightness-80"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-2xl font-bold">
                NOLEGGIA LA TUA YAMAHA
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}