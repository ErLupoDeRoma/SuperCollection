import Image from "next/image";
import Navbar from "@/components/Yamaha/Navbar";
import Card1 from "@/components/Yamaha/Card1";
import Card2 from "@/components/Yamaha/Card2";
import Card3 from "@/components/Yamaha/Card3";


export default function Home() {
  return (
    <>
    
<Navbar/>
<Card1/>
<div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-2 justify-center items-center bg-white">
  <Card2 titolo="La rata su mkisura accende la strada" testo="Vantaggi moto e scooter" immagine=" bg-[url(/images/Card3.webp)]"/>
  <Card2 titolo="Vento in poppa con gli" testo="incentivi satisfaction sea" immagine=" bg-[url(/images/Card4.webp)]"/>
  <Card2 titolo="20 giugno 2026" testo="Spirit of the challange" immagine=" bg-[url(/images/Card5.webp)]"/>
  <Card2 titolo="Fai la scelta giusta" testo="Nuovo tricity 300" immagine=" bg-[url(/images/Card2.webp)]"/>
  </div>
  

  <h1 className="font-extrabold bg-white">ESPLORA YAMAHA</h1>
  <div className="container mx-auto flex flex-wrap flex-row justify-start items-center bg-white">
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Scooters" immagine="/images/Scooters.jpg"/>
     <Card3 testo="Motori Fuoribordo" immagine="/images/Motori Fuoribordo.jpg"/>
     <Card3 testo="Moto d'acqua" immagine="/images/Moto d'acqua.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
     <Card3 testo="Moto" immagine="/images/Moto.jpg"/>
  </div>
 


    </>
  );
}
