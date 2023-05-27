interface Props {
    path:string
}

export default function PdfButton({path}:Props) {
    const handleButtonClick = () => {
        window.open(path, '_blank');
      };
    return (
        <button onClick={handleButtonClick} className="bg-mainPurple flex justify-center items-center
            text-white font-display font-medium text-2xl max-w-xs h-12 rounded-lg mt-8 px-4">
            PDF Summery
        </button>
    )
}