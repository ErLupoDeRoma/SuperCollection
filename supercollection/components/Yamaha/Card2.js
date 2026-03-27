export default function Card2(C2){
    return(
       <>
       <div className={"aspect-16/8 bg-no-repeat bg-cover flex items-end w-2/5 mt-10" + C2.immagine}>
       <div>
                   <h4 className="text-white font-extrabold text-xl ml-5 mb-1">{C2.titolo}</h4>
                   <h1 className="text-white font-extrabold text-4xl ml-5 mb-5">{C2.testo}</h1>
                    </div>
                 </div>   
       </>
    )
}