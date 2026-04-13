export default function Card8() {
  return (
    <div className="relative h-screen ml-80 mr-80 mb-20 mt-20">      
      <img
        src="/images/Yamaha/ABOUT US.webp"
        fill
        className="object-cover w-full h-[550px] brightness-80"
        priority
      />
      <div className="absolute inset-0 flex items-center -mt-10">
        <div className="max-w-3xl px-8 md:px-16 lg:px-24">
          <h1 className="text-white text-3xl font-extrabold ">ABOUT US</h1>
          <h1 className="text-white text-md mb-10 font-semibold mt-2">
            Che tu voglia CORRERE più velocemente, SENTIRE la passione della guida o trovare 
            la soluzione migliore per MUOVERSIin modo più intelligente, i nostri prodotti e servizi sono 
            gli unici che possono offrirti l' esperienza Kando.
          </h1>
          <button href="#" className="-mt-5 bg-white hover:bg-red-500 hover:text-white border border-black text-black font-semibold text-sm px-7 py-3 rounded-full flex items-center gap-3 transition-all duration-300">
            SCOPRI YAMAHA
          </button>
        </div>
      </div>
    </div>
  );
}