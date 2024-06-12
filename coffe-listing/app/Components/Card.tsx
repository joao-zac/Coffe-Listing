'use client'
import Image from "next/image"

import rats from "@/public/Star_fill.svg"

export default function Card() {

   
    return (
        <aside className="">
            <Image 
            src={"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"} 
            alt="lorem ipsum"
            width={200}
            height={150}
            className="rounded-xl"
            />

            <div className="flex justify-between mt-4">
                <h1 className="text-var-white font-bold text-xl">Cappucino</h1>
                
                <span className="text-var-black font-bold bg-var-lightBlue px-2 rounded-md text-base flex justify-center items-center">
                    $5.20
                </span>
            </div>
            
            <div className="flex mt-4 gap-1">
                <Image src={rats} alt="lore impsum"/>
                <h2 className="text-var-white font-bold">4.7</h2>
                <span className="text-var-grey font-bold">(65votes)</span>
            </div>
        </aside>
    )
}