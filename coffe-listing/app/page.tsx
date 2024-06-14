import SectionWrapper from "./Components/SectionWrapper";

export default async function Home() {

  return (
    <main className="bg-var-darkGrey my-20 -mt-36 mx-16 rounded-xl text-center flex flex-col items-center">

      <header className="flex flex-col mx-[33%] items-center gap-4">

        <h1 className="text-var-white text-4xl font-bold pt-20">Our Collection</h1>
        <p className="text-var-grey font-bold">
          Introducing our Coffee Collection, a selection of 
          unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>

      </header>

      <SectionWrapper />

    </main>
  );
}
