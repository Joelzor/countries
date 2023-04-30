import { IFormattedCountry } from "@/interfaces/formattedCountry";
import CountryItem from "./CountryItem";

interface CountryListProps {
  countries: IFormattedCountry[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <section className="pb-24 px-10 xl:px-16 grid gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1380px] w-full mx-auto">
      {countries.map((country, index) => {
        return <CountryItem key={index} country={country} />;
      })}
    </section>
  );
};

export default CountryList;
