"use client"

import Button from "./Button"
import { useState } from "react"

export default function MenuWrapper() {

    const [active, setActive] = useState<boolean>(false)

    return(
        <section className="flex w-[80%] justify-center gap-x-5">
          <Button state={active === true} setState={() => setActive(true)} title="All Products" />
          <Button state={active === false} setState={() => setActive(false)} title="Available Now" />
        </section>
    )
}