import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-dark-elements shadow-md ">
      <div className="flex items-center justify-between h-[5rem] px-5 md:px-12 max-w-[1380px] w-full mx-auto">
        <h3 className="font-black text-lg  md:text-xl">Where in the world?</h3>
        <div className="flex items-center gap-2">
          <MdOutlineDarkMode className="text-xl" />
          <button
            className="font-semibold"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
