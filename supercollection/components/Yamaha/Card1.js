export default function Card1() {
  return (
    <>
      <div className="bg-[url(/images/Card1.webp)] aspect-16/7 bg-no-repeat bg-cover flex items-end">
        <div className="mb-10 ml-20 flex-col gap-3 flex">
            <h5 className="font-bold text-white">Fai la tua scelta</h5>
            <h1 className="text-4xl font-bold text-white">Nuovo Tricicli 300</h1>
            <a className=" bg-white p-3 rounded-3xl lg:inline w-fill hidden hover:bg-red-600 hover:text-white" href="#">

                scoprilo ora
                <svg
                class="w-6 h-6 text-gray-800 drak:black inline"
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
      </div>
    </>
  );
}
