"use client"

import Button from "./Button"
import { useState } from "react"

export default function Wrapper() {

    const [active, setActive] = useState<boolean>(false)

    return(
        <section className="flex justify-evenly w-[80%]">
          <Button state={active === true} setState={() => setActive(true)} title="All Products" />
          <Button state={active === false} setState={() => setActive(false)} title="Available Now" />
        </section>
    )
}