import Link from "next/link";
import { useEffect, useState } from "react";

interface BordersProps {
  borderCountries: string[];
}

const Borders = ({ borderCountries }: BordersProps) => {
  const [borderNames, setBorderNames] = useState([]);

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

  return (
    <div>
      <h3 className="text-xl my-5">Border Countries:</h3>
      {borderNames.map((name, index) => {
        return (
          <Link href={`/country/${name.toLowerCase()}`} key={index}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Borders;
