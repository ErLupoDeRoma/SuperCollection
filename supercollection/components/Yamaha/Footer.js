export default function Footer() {
  return (
    <div className="bg-black text-white px-6 py-12 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <h3 className="font-bold mb-4">CORPORATE</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Chi siamo</li>
            <li>News</li>
            <li>Eventi</li>
            <li>Stampa</li>
            <li>Brochures</li>
            <li>Lavora con noi</li>
            <li>Lavora presso una Concessionaria Ufficiale Yamaha</li>
            <li>Diventa un rivenditore</li>
            <li>Informativa sui diritti umani</li>
            <li>Informativa di base sulla sostenibilità</li>
            <li>Canale per le segnalazioni</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">B2B</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Soluzioni di Business</li>
            <li>NEO's Delivery</li>
            <li>Sistemi eBike</li>
            <li>Autorità</li>
            <li>Campi da golf</li>
            <li>Primi soccorritori</li>
            <li>Scuole guida</li>
            <li>Robotics</li>
            <li>Collaborazione</li>
            <li>Informazioni tecniche per rivenditori indipendenti</li>
            <li>Scheda di sicurezza Yamalube</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">PIÙ YAMAHA</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>MyYamaha</li>
            <li>Yamaha Music</li>
            <li>Yamaha Racing</li>
            <li>Yamaha Motor Global</li>
            <li>Yamaha Blog</li>
            <li>Applicazioni mobili</li>
            <li>Differenziata prodotti Yamaha</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">SUPPORTO</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQ</li>
            <li>Supporto clienti</li>
            <li>Catalogo dei ricambi</li>
            <li>Prenota la manutenzione</li>
            <li>Concessionari ufficiali</li>
            <li>Gestione delle batterie esauste</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">NEWSLETTER</h3>
          <p className="text-sm text-gray-300 mb-4">
            Conoscerai in anteprima le offerte, gli eventi speciali, le nuove
            uscite e molto altro
          </p>

          <div className="flex">
            <input
              type="email"
              className="bg-white w-full px-3 py-2 text-black rounded-l-md"
              placeholder="Inserisci la tua e-mail"
            />
            <button className="bg-red-600 px-4 rounded-r-md">ISCRIVITI</button>
          </div>
        </div>
      </div>
    </div>
  );
}
