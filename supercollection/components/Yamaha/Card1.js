export default function Card1() {
  return (
    <>
      <div className="bg-[url(/images/Yamaha/Card2.webp)] aspect-16/8 bg-no-repeat bg-cover flex items-end">
        <div className="lg:mb-10 lg:ml-20 ml-5 flex-col gap-3 flex">
          <h5 className="font-bold text-white">FAI LA TUA SCELTA</h5>
          <h1 className="text-2xl xl:text-4xl font-bold text-white">
            NUOVI TRICICLI 300
          </h1>
          <div className="flex justify-start z-10">
            <button className="mt-8 bg-white hover:bg-red-500 hover:text-white border-2 border-black text-black font-semibold text-lg px-12 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
              Scoprilo Ora →
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-gray-800 flex w-full justify-center text-center">
        <a
          href="#"
          className="bg-white p-3 rounded-3xl inline w-full hover:bg-red-500 hover:text-white"
        >
          SCOPRILO ORA →
        </a>
      </div>
    </>
  );
}
