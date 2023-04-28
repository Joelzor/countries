import { IFormattedCountry } from "@/interfaces/formattedCountry";
import CountryItem from "./CountryItem";

interface CountryListProps {
  countries: IFormattedCountry[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <section className="px-10 xl:px-16 py-8 grid gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country, index) => {
        return <CountryItem key={index} country={country} />;
      })}
    </section>
  );
};

export default CountryList;
