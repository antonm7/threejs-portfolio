import styles from "./index.module.scss";

interface Props {
  title: string;
}

export default function SkillBox({ title }: Props) {
  return (
    <div
      id={styles.wrapper}
      className="mr-5 mb-5 bg-white px-6 h-16 rounded-md flex justify-center items-center"
    >
      <div className="bg-mainPurple w-4 h-4 mr-3 rounded-full"></div>
      <span className="font-display text-xl">{title}</span>
    </div>
  );
}
