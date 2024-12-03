import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  method: () => void;
}

export default function ArrowLink({ method }: Props) {
  return (
    <FontAwesomeIcon
      onClick={method}
      className={`h-4 cursor-pointer text-white`}
      icon={faLocationArrow}
    />
  );
}
