export default function Navbar() {
  return (
    <>
      <div className="flex justify-between border bg-white fixed w-full border-gray-900 h-20">
        <div className="flex justify-around gap-2">
          <div>
            <img src="/images/Diadora/Diadora logo.svg" alt="" className="w-30 mt-5 ml-5" />
          </div>
        </div>
        <div className="justify-evenly gap-10 hidden lg:flex mt-7">
          <div>
            <h1 className="font-bold">Uomo</h1>
          </div>
          <div>
            <h1 className="font-bold">Donna</h1>
          </div>
          <div>
            <h1 className="font-bold">Bambini</h1>
          </div>
          <div>
            <h1 className="font-bold">Sport</h1>
          </div>
          <div>
            <h1 className="font-bold">Heritage</h1>
        </div>
        <div>
            <h1 className="font-bold">Colture</h1>
        </div>
</div>

        <div className="flex justify-evenly gap-4 mr-5">
          <div>
            <img src="/images/Diadora/Lente.png" alt="" className="w-5 mt-7" />
          </div>
          <div>
            <img src="/images/Diadora/Cuore.svg" alt="" className="w-5 mt-7" />
          </div>
          <div>
            <img src="/images/Diadora/Borsa.png" alt="" className="w-10 mt-4" />
          </div>
          <div>
            <img src="/images/Diadora/Linee.png" alt="" className="w-5 mt-7" />
          </div>
        </div>
      </div>
    </>
  );
}
