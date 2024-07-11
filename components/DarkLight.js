"use client";
import { IoMdFlashlight } from "react-icons/io";
import { FaUssunnah } from "react-icons/fa6";
import { useTheme } from "next-themes";
import classNames from "classnames";

export default function DarkLight() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-amber-100 flex items-center"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span
        // className={classNames(
        //   "w-7 h-7 flex items-center justify-center bg-amber-500 rounded-full",
        //   {
        //     "ml-5": theme === "dark",
        //   },
        // )}
        className={`w-7 h-7 flex items-center justify-center bg-amber-500 rounded-full transition-all duration-500
          ${theme === "dark" ? "ml-5" : ""}`}
      >
        <FaUssunnah size={20} />
      </span>
    </div>
  );
}
