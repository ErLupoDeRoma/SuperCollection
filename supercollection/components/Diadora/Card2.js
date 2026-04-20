export default function Card2(C2) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mt-10 mb-10">
        <h1 className="text-5xl font-bold text-center">
          {C2.titolo}
        </h1>
        <div className="flex flex-row gap-3">
          <h1 className="bg-[#383935] rounded-full px-5 py-2 text-white font-extrabold">
            {C2.riquadro1}
          </h1>
          <h1 className="bg-[#383935] rounded-full px-5 py-2 text-white font-extrabold">
            {C2.riquadro2}
          </h1>
          <h1 className="bg-[#383935] rounded-full px-5 py-2 text-white font-extrabold">
            {C2.riquadro3}
          </h1>
          <h1 className="bg-[#383935] rounded-full px-5 py-2 text-white font-extrabold">
            {C2.riquadro4}
          </h1>
          <h1 className="bg-[#383935] rounded-full px-5 py-2 text-white font-extrabold">
            {C2.riquadro5}
          </h1>
        </div>
      </div>
    </>
  );
}
