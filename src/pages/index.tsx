import { AiOutlineSearch } from "react-icons/ai";
import { IFormattedCountry } from "@/interfaces/formattedCountry";
import CountryList from "@/components/CountryList";
import { ChangeEvent, useState } from "react";

interface HomeProps {
  countries: IFormattedCountry[];
}

export default function Home({ countries }: HomeProps) {
  const [countriesList, setCountriesList] = useState(countries);
  const [filters, setFilters] = useState({ query: "", region: "all" });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (query === "") {
      setCountriesList(countries);
      return;
    }

    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(query.toLowerCase());
    });

    setCountriesList(filtered);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;

    if (region === "all") {
      setCountriesList(countries);
    } else {
      setCountriesList(
        countries.filter((country) => country.region === region)
      );
    }
  };

  // const handleChange = (
  //   e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  // ) => {
  //   const value = e.target.value;
  //   const name = e.target.name;

  //   setFilters({ ...filters, [name]: value });
  // };

  return (
    <>
      <div className="px-5 md:px-12 py-8 md:flex justify-between relative">
        <input
          type="text"
          className="shadow-md py-4 pl-24 w-full mb-8 md:w-2/5 rounded"
          placeholder="Search for a country..."
          name="search"
          onChange={handleSearch}

          // onChange={handleSearch}
        />
        <AiOutlineSearch className="absolute text-xl text-neutral-400 top-[52px] left-[60px] md:left-[80px]" />

        <select
          name="region"
          className="shadow-md py-4 pl-4 pr-16 self-start rounded"
          onChange={handleSelect}
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {countriesList.length > 1 && <CountryList countries={countriesList} />}
      {/* {countriesList.length < 1 && (
        <div className="h-[70vh] flex items-center justify-center">
          <h2 className="text-2xl">Your search returned no results</h2>
        </div>
      )} */}
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
