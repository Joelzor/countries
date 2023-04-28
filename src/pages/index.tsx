import { AiOutlineSearch } from "react-icons/ai";
import { IFormattedCountry } from "@/interfaces/formattedCountry";
import CountryList from "@/components/CountryList";

interface HomeProps {
  countries: IFormattedCountry[];
}

export default function Home({ countries }: HomeProps) {
  return (
    <>
      <div className="px-5 md:px-12 py-8 md:flex justify-between relative">
        <input
          type="text"
          className="shadow-md py-4 pl-24 w-full mb-8 md:w-2/5 rounded"
          placeholder="Search for a country..."
        />
        <AiOutlineSearch className="absolute text-xl text-neutral-400 top-[52px] left-[60px] md:left-[80px]" />

        <select
          name="region"
          className="shadow-md py-4 pl-4 pr-16 self-start rounded"
        >
          <option>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/countries");

  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
