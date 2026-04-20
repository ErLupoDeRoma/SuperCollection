import Navbar from "@/components/Diadora/Navbar";
import Card1 from "@/components/Diadora/Card1";
import Card2 from "@/components/Diadora/Card2";

export default function Diadora() {
  return (
    <>
    
<Navbar/>
<Card1 immagine=" bg-[url(/images/Diadora/Scarpa_grande.jpg)]" sottotitolo="Running collection" titolo="Il cuore del running italiano" bottone="Scopri Atomo Star" colore=" text-white" coloreb=" text-black"/>
<Card2 titolo="Le nostre collezioni" riquadro1="Uomo" riquadro2="Donna" riquadro3="Sport" riquadro4="Heritage" riquadro5="Sportswear"/>
<Card1 immagine=" bg-[url(/images/Diadora/Tipa_con_giubbotto.jpg)]" sottotitolo="Heritage collection" titolo="Oltre la Pista" bottone="Scopri Equipe Revenge" colore=" text-black" coloreb=" text-black"/>
    </>
  );
}