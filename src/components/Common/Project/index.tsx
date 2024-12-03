import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ArrowLink from "../ArrowLink";
interface Props {
  img: string;
  title: string;
  to: string;
}

export default function Project({ img, title, to }: Props) {
  const navigate = useNavigate();

  const navigateMethod = () => {
    navigate(`/project/${to}`);
  };

  return (
    <div
      className={`${styles.wrapper} relative flex mb-4 justify-between items-end pb-4 px-2 w-64 rounded-2xl h-[300px] bg-blue-200`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p
        onClick={() => navigateMethod()}
        className="cursor-pointer font-display font-medium text-lg underline text-white"
      >
        {title}
      </p>
      <ArrowLink method={() => navigateMethod()} />
    </div>
  );
}
