export default function Button({ title }: { title: string}) {
    return (
        <button className="bg-var-grey text-var-white px-2 py-1 rounded-md font-bold">
            {title}
        </button>
    )
}