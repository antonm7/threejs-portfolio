interface Props {
    onClick: () => void
    title:string
    marginRight?:string
}

export default function FullButton({onClick, title,marginRight}:Props) {
    return (
        <button onClick={onClick} className="bg-mainPurple w-72 
        max-w-72 h-24 text-white rounded-2xl text-3xl font-bold font-display"
        style={{marginRight}}>
            {title}
        </button>
    )
}