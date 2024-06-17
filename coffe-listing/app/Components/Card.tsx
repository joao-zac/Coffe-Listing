import Image from "next/image"

import starFill from "@/public/Star_fill.svg"
import starVoid from "@/public/Star.svg"
import { CafeTypes } from "../Types/CafeTypes"

export default function Card(props: CafeTypes) {

    const star = props.rating !== null ? starFill : starVoid
   
    return (
        <aside className="">
            <Image 
            src={props.image} 
            alt="lorem ipsum"
            width={250}
            height={150}
            className="rounded-xl"
            />

            <div className="flex justify-between mt-3">
                <h1 className="text-var-white font-bold text-xl">{props.name}</h1>
                
                <span className="text-var-black font-bold bg-var-lightBlue px-2 rounded-md text-sm flex justify-center items-center">
                    {props.price}
                </span>
            </div>
            
            <div className="flex mt-2 gap-1">
                <Image src={star} alt="lore impsum"/>
                <h2 className="text-var-white font-bold">{props.rating}</h2>
                <span className="text-var-grey font-bold">{props.votes ? `(${props.votes}) votes` : "No ratings"}</span>
            </div>
        </aside>
    )
}