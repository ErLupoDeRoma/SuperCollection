export default function Navbar() {
  return (
    <>
      <div className="flex justify-center border bg-white fixed w-full z-100 border-gray-300">
        <div className="flex justify-around gap-2">
          <div>
            <img
              src="/images/Yamaha/Yamaha_logo.png"
              alt=""
              className="w-30 mt-2"
            />
          </div>
          <div>
            <img
              src="/images/Yamaha/70_anniversary.png"
              alt=""
              className="w-10 mt-4 mr-5"
            />
          </div>
        </div>

        <div className="justify-evenly gap-10 mt-5 hidden lg:flex ">
          <div>
            <h1 className="font-bold">I NOSTRI MODELLI</h1>
          </div>
          <div>
            <h1 className="font-bold">ACCESSORI</h1>
          </div>
          <div>
            <h1 className="font-bold">ABBIGLIAMENTO & MERCHANDISE</h1>
          </div>
          <div>
            <h1 className="font-bold">EVENTI & EXPERIENCE</h1>
          </div>
          <div>
            <h1 className="font-bold">SERVIZI & MANUTENZIONE</h1>
          </div>
        </div>

        <div className="flex justify-evenly gap-2 mt-2 ml-5">
          <div>
            <img src="/images/Yamaha/lente.webp" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/ping.webp" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/Carrello.png" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/account.png" alt="" className="w-10" />
          </div>

          <div>
            <img src="/images/Yamaha/bandiera.png" alt="" className="w-10" />
          </div>
        </div>
      </div>
    </>
  );
}
