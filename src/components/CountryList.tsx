import { IFormattedCountry } from "@/interfaces/formattedCountry";
import CountryItem from "./CountryItem";

interface CountryListProps {
  countries: IFormattedCountry[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <section>
      {countries.map((country, index) => {
        return <CountryItem key={index} country={country} />;
      })}
    </section>
  );
};

export default CountryList;
