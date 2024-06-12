import Button from "./Components/Button";
import Card from "./Components/Card";

import { CafeTypes } from "./Types/CafeTypes";

async function handleFetch(): Promise<CafeTypes[]> {
  const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
  return response.json()
}

export default async function Home() {

  const dados = await handleFetch() 

  return (
    <main className="bg-var-darkGrey my-20 -mt-36 mx-16 rounded-xl text-center flex flex-col items-center">

      <header className="flex flex-col mx-[33%] items-center gap-4">

        <h1 className="text-var-white text-4xl font-bold pt-20">Our Collection</h1>
        <p className="text-var-grey font-bold">
          Introducing our Coffee Collection, a selection of 
          unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>

        <section className="flex justify-evenly w-[80%]">
          <Button title="All Products" />
          <Button title="Available Now" />
        </section>

      </header>

      <section className="flex my-16  max-w-5xl flex-wrap justify-around gap-12">
        {dados.map((cafe) => (
          <Card key={cafe.id} name={cafe.name} image={cafe.image} price={cafe.price} rating={cafe.rating} votes={cafe.votes} />
        ))}
      </section>

    </main>
  );
}
