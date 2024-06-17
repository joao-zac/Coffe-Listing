"use client"

import { useState } from "react"

import Button from "./Button"
import Card from "./Card"
import { CafeTypes } from "../Types/CafeTypes"

type Props = {
  data: CafeTypes[]
}

export default function MenuWrapper({ data }: Props) {

  const [active, setActive] = useState<boolean>(true)
  const available_coffe = data.filter((data) => data.available)  

  return(
    <>
      <section className="flex w-[80%] justify-center gap-x-5">
        <Button state={active === true} setState={() => setActive(true)} title="All Products" />
        <Button state={active === false} setState={() => setActive(false)} title="Available Now" />
      </section>

      {(active === false ? available_coffe : data).map((cafe) => (
        <Card key={cafe.id} image={cafe.image} name={cafe.name} price={cafe.price} rating={cafe.rating} votes={cafe.votes} available={cafe.available} />
      ))}
    </>
  )
}