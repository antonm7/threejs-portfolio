interface Props {
    onClick: () => void
    title:string
}

export default function BorderedButton({onClick, title}:Props) {
    return (
        <button onClick={onClick} className="bg-white w-72 
        max-w-72 h-24 text-mainPurple rounded-2xl text-3xl 
        font-bold border-2 border-mainPurple font-display">
            {title}
        </button>
    )
}