type Props = {
    title: string
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({ title, state, setState }: Props) {

    function handleClick() {
        setState(!state)
    }

    return (
        <button 
        className={`${state === true ? "bg-var-grey" : "bg-transparent"} text-var-white px-2 py-1 rounded-md font-bold`}
        onClick={handleClick}>
            {title}
        </button>
    )
}