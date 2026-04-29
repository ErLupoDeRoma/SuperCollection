export default function Card4(C4) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mt-10 mb-10">
        <h1 className="text-5xl font-bold text-center">{C4.titolo}</h1>
        <div className="flex flex-row gap-3 text-[#383935] text-center">
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Prestige.png" className="w-30 flex" />
            {C4.riquadro1}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Trainer.png" className="w-30 flex" />
            {C4.riquadro2}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/B_560.png" className="w-30 flex" />
            {C4.riquadro3}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/B_Elite.png" className="w-30 flex" />
            {C4.riquadro4}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Game.png" className="w-30 flex" />
            {C4.riquadro5}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Tokio.png" className="w-30 flex" />
            {C4.riquadro6}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Mythos_star.png" className="w-30 flex" />
            {C4.riquadro7}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Cross.png" className="w-30 flex" />
            {C4.riquadro8}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Equipe.png" className="w-30 flex" />
            {C4.riquadro9}
          </h1>
          <h1 className=" rounded-full px-5 py-2 font-extrabold">
            <img src="/images/Diadora/Camaro.png" className="w-30 flex" />
            {C4.riquadro10}
          </h1>
        </div>
      </div>
    </>
  );
}
