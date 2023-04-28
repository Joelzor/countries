import { IFormattedCountry } from "@/interfaces/formattedCountry";

interface CountryItemProps {
  country: IFormattedCountry;
}

const CountryItem = ({ country }: CountryItemProps) => {
  console.log(country);
  return <div>Country</div>;
};

export default CountryItem;
