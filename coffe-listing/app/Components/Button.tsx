type Props = {
    title: string
}

export default function Button({ title }: Props) {
    return (
        <button className="bg-var-grey text-var-white px-4 py-1 rounded-md font-bold">
            {title}
        </button>
    )
}