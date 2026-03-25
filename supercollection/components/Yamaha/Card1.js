export default function Card1() {
  return (
    <>
      <div className="bg-[url(/images/Card2.webp)] aspect-16/8 bg-no-repeat bg-cover flex items-end">
        <div className="lg:mb-10 lg:ml-20 ml-5 flex-col gap-3 flex">
            <h5 className="font-bold text-white">FAI LA TUA SCELTA</h5>
            <h1 className="text-2xl xl:text-4xl font-bold text-white">
              NUOVI TRICICLI 300
              </h1>
            <div className="flex justify-start z-10">
          <button className="mt-8 bg-white hover:bg-red-500 hover:text-white border-2 border-black text-black font-semibold text-lg px-12 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
            Scoprilo Ora
            <span>→</span>
          </button>
          </div>
        </div>
      </div>
<div className="lg:hidden bg-gray-800 flex w-full justify-center text-center">
  <a href="#" className="bg-white p-3 rounded-3xl inline w-full hover:bg-red-500 hover:text-white">
    SCOPRILO ORA
    <svg
                class="w-6 h-6 text-inherit inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                >
                    <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                </svg>

    
  </a>
</div>
    </>
  );
}
