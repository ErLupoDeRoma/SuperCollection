export default function Card2(props){
    return(
       <>
       <div className={"aspect-16/8 bg-no-repeat bg-cover flex items-end w-2/5 mt-10" + props.immagine}>
       <div>
                   <h4 className="text-white font-extrabold text-xl ml-5 mb-1">{props.titolo}</h4>
                   <h1 className="text-white font-extrabold text-4xl ml-5 mb-5">{props.testo}</h1>
                    </div>
                 </div>   
       </>
    )
}