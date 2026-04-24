import Navbar from "@/components/Diadora/Navbar";
import Card1 from "@/components/Diadora/Card1";
import Card2 from "@/components/Diadora/Card2";

import Card4 from "@/components/Diadora/Card4";

export default function Diadora() {
  return (
    <>
    
<Navbar/>
<Card1 immagine=" bg-[url(/images/Diadora/Scarpa_grande.jpg)]" sottotitolo="Running collection" titolo="Il cuore del running italiano" bottone="Scopri Atomo Star" colore=" text-white" coloreb=" text-black"/>
<Card2 titolo="Le nostre collezioni" riquadro1="Uomo" riquadro2="Donna" riquadro3="Sport" riquadro4="Heritage" riquadro5="Sportswear"/>
<Card1 immagine=" bg-[url(/images/Diadora/Tipa_con_giubbotto.jpg)]" sottotitolo="Heritage collection" titolo="Oltre la Pista" bottone="Scopri Equipe Revenge" colore=" text-black" coloreb=" text-black"/>
<Card4 titolo="Lifestyle classic" riquadro1="Prestige" riquadro2="Trainer" riquadro3="B.560" riquadro4="B.Elite" riquadro5="Game" riquadro6="Tokio" riquadro7="Mythos" riquadro8="Cross" riquadro9="Equipe" riquadro10="Camaro"/>
<Card1 immagine=" bg-[url(/images/Diadora/Tipa_sdraiata.jpg)]" sottotitolo="Sportwear" titolo="The Future is Bright" bottone="Scopri Mythos 280" colore=" text-white" coloreb=" text-black"/>
   </>
  );
}