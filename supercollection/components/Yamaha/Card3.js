export default function Card3(esplora){
    return(
       <>
       <div className="flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/6 mb-6">
        <div>
            <img src={esplora.immagine}/>
        </div>
        <div>
            <h5>
                {esplora.testo}
            </h5>
        </div>
       </div>
       </>
    )
}