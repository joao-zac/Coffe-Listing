import MenuWrapper from "./MenuWrapper";
import useFetch from "../hooks/useFetch";

export default async function SectionWrapper() {

  const dados = await useFetch()

  return (
    <section className="max-w-5xl flex flex-col items-center gap-y-8">
      <MenuWrapper data={dados}/>
    </section>
  )
}