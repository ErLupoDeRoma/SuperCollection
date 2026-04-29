export default function Card3(C3) {
  return (
    <>
      <div className="flex flex-row justify-center rounded-xl shadow-lg w-150">
        <div>
          <img src={C3.immagine} />
          <div className="flex flex-col gap-5 p-4">
            <p className="text-lg">{C3.titolo}</p>
            <div>{C3.prezzo}</div>
            <div>
              <p className="font-">{C3.testo}</p>
              <p className="text-bold">{C3.colore}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
