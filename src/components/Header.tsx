import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between h-[5rem] px-5 md:px-12">
      <h3 className="font-black text-lg  md:text-xl">Where in the world?</h3>
      <div className="flex items-center gap-2">
        <MdOutlineDarkMode className="text-xl" />
        <button className="font-semibold">Dark Mode</button>
      </div>
    </nav>
  );
};

export default Header;
