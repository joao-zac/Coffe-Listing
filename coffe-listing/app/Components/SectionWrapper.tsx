import Card from "./Card";
import MenuWrapper from "./MenuWrapper";
import useFetch from "../hooks/useFetch";

export default async function SectionWrapper() {

    const dados = await useFetch()

    return (
        <section className="flex mb-16 mt-8  max-w-5xl flex-wrap justify-around gap-12">

        <MenuWrapper />

        {dados.map((cafe) => (
          <Card key={cafe.id} name={cafe.name} image={cafe.image} price={cafe.price} rating={cafe.rating} votes={cafe.votes} />
        ))}

      </section>
    )
}