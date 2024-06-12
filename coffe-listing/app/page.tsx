import Button from "./Components/Button";
import Card from "./Components/Card";

export default function Home() {
  return (
    <main className="bg-var-darkGrey my-20 -mt-36 mx-auto rounded-xl text-center">

      <header className="flex flex-col mx-[29%] items-center">

        <h1 className="text-var-white text-4xl font-bold pt-20">Our Collection</h1>
        <p className="text-var-grey">
          Introducing our Coffee Collection, a selection of 
          unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>

        <section className="flex justify-evenly w-2/3">
          <Button title="All Products" />
          <Button title="Available Now" />
        </section>

      </header>

      <section className="flex flex-row">
        <Card />
        {/* <Card /> */}
      </section>

    </main>
  );
}
