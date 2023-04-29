import { IFormattedCountry } from "@/interfaces/formattedCountry";
import Image from "next/image";
import Link from "next/link";

interface CountryItemProps {
  country: IFormattedCountry;
}

const CountryItem = ({ country }: CountryItemProps) => {
  const { name, population, region, capital, flag } = country;
  return (
    <Link href="/country/[name]" as={`/country/${name.toLowerCase()}`}>
      <article className="bg-white dark:bg-dark-elements rounded shadow-md">
        <Image
          src={flag}
          height={200}
          width={220}
          alt={`${name} flag`}
          className="w-full md:w-[300px] h-[200px] object-cover"
        />
        <div className="py-12 px-8">
          <h4 className="font-black text-xl mb-6">{name}</h4>
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-black">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-black">Region:</span> {region}
            </p>
            <p>
              <span className="font-black">Capital:</span>{" "}
              {capital ? capital : "Some snowy hill"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CountryItem;
