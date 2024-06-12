'use client'
import Image from "next/image"

import rats from "@/public/Star_fill.svg"
import { CafeTypes } from "../Types/CafeTypes"

export default function Card(props: CafeTypes) {
   
    return (
        <aside className="">
            <Image 
            src={props.image} 
            alt="lorem ipsum"
            width={250}
            height={150}
            className="rounded-xl"
            />

            <div className="flex justify-between mt-4">
                <h1 className="text-var-white font-bold text-xl">{props.name}</h1>
                
                <span className="text-var-black font-bold bg-var-lightBlue px-2 rounded-md text-base flex justify-center items-center">
                    {props.price}
                </span>
            </div>
            
            <div className="flex mt-4 gap-1">
                <Image src={rats} alt="lore impsum"/>
                <h2 className="text-var-white font-bold">{props.rating}</h2>
                <span className="text-var-grey font-bold">{props.votes ? props.votes : "No ratings"}</span>
            </div>
        </aside>
    )
}