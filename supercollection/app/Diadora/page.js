import Navbar from "@/components/Diadora/Navbar";
import Card1 from "@/components/Diadora/Card1";
import Card2 from "@/components/Diadora/Card2";
import Card3 from "@/components/Diadora/Card3";
import Card4 from "@/components/Diadora/Card4";

export default function Diadora() {
  return (
    <>
      <Navbar />
      <Card1
        immagine=" bg-[url(/images/Diadora/Scarpa_grande.jpg)]"
        sottotitolo="Running collection"
        titolo="Il cuore del running italiano"
        bottone="Scopri Atomo Star"
        colore=" text-white"
        coloreb=" text-black"
      />
      <Card2
        titolo="Le nostre collezioni"
        riquadro1="Uomo"
        riquadro2="Donna"
        riquadro3="Sport"
        riquadro4="Heritage"
        riquadro5="Sportswear"
      />
      <Card1
        immagine=" bg-[url(/images/Diadora/Tipa_con_giubbotto.jpg)]"
        sottotitolo="Heritage collection"
        titolo="Oltre la Pista"
        bottone="Scopri Equipe Revenge"
        colore=" text-black"
        coloreb=" text-black"
      />
      <div className="flex flex-row justify-evenly">
        <Card3
          immagine="/images/Diadora/Scarpone_1.jpg"
          titolo="PRESTIGE ADGE ITALIA"
          prezzo="€230,00"
          testo="Sneaker Heritage in pelle - Made in Italy - Per ogni genere"
          colore="2 colore"
        />
        <Card3
          immagine="/images/Diadora/Scarpone_2.jpg"
          titolo="PRESTIGE HIGHT METAL USED"
          prezzo="€200,00"
          testo="Sneaker Heritage in pelle metallizzata - Per ogni genere"
          colore="1 colore"
        />
        <Card3
          immagine="/images/Diadora/Scarpone_3.jpg"
          titolo="MYTHOS STAR LEA"
          prezzo="€170,00"
          testo="Sneaker sportiva in pelle - Per ogni genere"
          colore="1 colore"
        />
      </div>
      <Card4
        titolo="Lifestyle classic"
        riquadro1="Prestige"
        riquadro2="Trainer"
        riquadro3="B.560"
        riquadro4="B.Elite"
        riquadro5="Game"
        riquadro6="Tokio"
        riquadro7="Mythos"
        riquadro8="Cross"
        riquadro9="Equipe"
        riquadro10="Camaro"
      />
      <Card1
        immagine=" bg-[url(/images/Diadora/Tipa_sdraiata.jpg)]"
        sottotitolo="Sportwear"
        titolo="The Future is Bright"
        bottone="Scopri Mythos 280"
        colore=" text-white"
        coloreb=" text-black"
      />
      <div className="flex flex-row justify-evenly">
        <Card3
          immagine="/images/Diadora/Scarpone_1.jpg"
          titolo="PRESTIGE ADGE ITALIA"
          prezzo="€230,00"
          testo="Sneaker Heritage in pelle - Made in Italy - Per ogni genere"
          colore="2 colore"
        />
        <Card3
          immagine="/images/Diadora/Scarpone_2.jpg"
          titolo="PRESTIGE HIGHT METAL USED"
          prezzo="€200,00"
          testo="Sneaker Heritage in pelle metallizzata - Per ogni genere"
          colore="1 colore"
        />
        <Card3
          immagine="/images/Diadora/Scarpone_3.jpg"
          titolo="MYTHOS STAR LEA"
          prezzo="€170,00"
          testo="Sneaker sportiva in pelle - Per ogni genere"
          colore="1 colore"
        />
      </div>
    </>
  );
}
