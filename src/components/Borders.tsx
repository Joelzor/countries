import Link from "next/link";
import { useEffect, useState } from "react";

interface BordersProps {
  borderCountries: string[];
}

const Borders = ({ borderCountries }: BordersProps) => {
  const [borderNames, setBorderNames] = useState<string[] | null>(null);

  useEffect(() => {
    const getBorderNames = async () => {
      const res = await fetch(
        `http://localhost:3000/api/borders/${borderCountries}`
      );

      const data = await res.json();
      setBorderNames(data);
    };

    getBorderNames();
  }, [borderCountries]);

  if (!borderNames) {
    return <h1>Loading...</h1>;
  }

  if (!borderCountries) {
    return (
      <>
        <h3 className="text-xl my-5">Border Countries:</h3>
        <span>Probably an island</span>
      </>
    );
  }

  return (
    <div className="pb-16">
      <h3 className="text-xl my-5">Border Countries:</h3>
      <div className="flex gap-2 flex-wrap">
        {borderNames.map((name, index) => {
          return (
            <Link
              className="bg-white dark:bg-dark-elements flex items-center justify-center 2 w-[120px] px-5 shadow-md font-light py-4 text-xs"
              href={`/country/${name.toLowerCase()}`}
              key={index}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Borders;
