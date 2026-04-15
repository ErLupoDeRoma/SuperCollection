export default function Card1() {
  return (
    <>
      <div className="bg-[url(/images/Diadora/Scarpa_grande.jpg)] h-full aspect-12/6 bg-no-repeat bg-cover flex items-end">
        <div className= "ml-8 mb-20 flex-col gap-3 flex">

            <h5 className="font-bold text-white">Running collection</h5>
            <h1 className="text-5xl font-extrabold text-white">
              Il cuore del running <br />italiano
              </h1>
            <div className="flex justify-start z-10">
          <button className="mt-8 bg-white hover:bg-gray-300 border-2 border-black text-black font-semibold text-md px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300">
            Scopri Atom Star 
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
