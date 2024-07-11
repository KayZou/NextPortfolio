export default function HeaderInfo({ Icon, title }) {
  return (
    <div className={"flex items-center space-x-2 mt-2"}>
      <Icon className={"text-dark dark:text-white"} />
      <span
        className={
          "capitalize text-base font-semibold text-amber-500/80 dark:text-white"
        }
      >
        {title}
      </span>
    </div>
  );
}
