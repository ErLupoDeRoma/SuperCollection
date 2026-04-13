import Image from "next/image";
import Navbar from "@/components/Yamaha/Navbar";
import Card1 from "@/components/Yamaha/Card1";
import Card2 from "@/components/Yamaha/Card2";
import Card3 from "@/components/Yamaha/Card3";
import Card4 from "@/components/Yamaha/Card4";
import Card5 from "@/components/Yamaha/Card5";
import Card6 from "@/components/Yamaha/Card6";
import Card7 from "@/components/Yamaha/Card7";
import Card8 from "@/components/Yamaha/Card8";
import Card9 from "@/components/Yamaha/Card9";
import Mappa from "@/components/Yamaha/mappa";
import Footer from "@/components/Yamaha/Footer";


export default function Yamaha() {
  return (
    <>
    
<Navbar/>
<Card1/>
<div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-2 justify-center items-center bg-white">
  <Card2 titolo="La rata su mkisura accende la strada" testo="Vantaggi moto e scooter" immagine=" bg-[url(/images/Yamaha/Card3.webp)]"/>
  <Card2 titolo="Vento in poppa con gli" testo="incentivi satisfaction sea" immagine=" bg-[url(/images/Yamaha/Card4.webp)]"/>
  <Card2 titolo="20 giugno 2026" testo="Spirit of the challange" immagine=" bg-[url(/images/Yamaha/Card5.webp)]"/>
  <Card2 titolo="Fai la scelta giusta" testo="Nuovo tricity 300" immagine=" bg-[url(/images/Yamaha/Card2.webp)]"/>
  </div>
  

  <h1 className="font-extrabold bg-white w-384 ml-46 mt-10">ESPLORA YAMAHA</h1>
  <div className="container mx-auto flex flex-wrap flex-row justify-start items-center bg-white">
     <Card3 testo="Moto" immagine="/images/Yamaha/Moto.jpg"/>
     <Card3 testo="Scooters" immagine="/images/Yamaha/Scooters.jpg"/>
     <Card3 testo="Motori Fuoribordo" immagine="/images/Yamaha/Motori Fuoribordo.jpg"/>
     <Card3 testo="Moto d'acqua" immagine="/images/Yamaha/Moto d'acqua.jpg"/>
     <Card3 testo="Packge" immagine="/images/Yamaha/Packge.jpg"/>
     <Card3 testo="ATV & Side by Side" immagine="/images/Yamaha/ATV & Side by Side.jpg"/>
     <Card3 testo="Veicoli leggeri" immagine="/images/Yamaha/Veicoli leggeri.jpg"/>
     <Card3 testo="Accessori" immagine="/images/Yamaha/Accessori.jpg"/>
     <Card3 testo="Abbigliamento & Merchandise" immagine="/images/Yamaha/Abbigliamento & Merchandise.jpg"/>
     <Card3 testo="Oli Per Motori" immagine="/images/Yamaha/Oli Per Motori.jpg"/>
     <Card3 testo="Pulizia & Protezione" immagine="/images/Yamaha/Pulizia & Protezione.jpg"/>
  </div>
 

<div>
  <Card4 titolo="PRENOTA UN TEST RIDE GRATUITO" bottone="PRENOTA ORA →"/>
</div>

<Card5/>

<Card6/>

<Card7/>

<Card8/>

<Card9/>

<Mappa/>

<Footer/>
    </>
  );
}
