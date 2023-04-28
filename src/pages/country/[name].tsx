import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";
import { ICountryDetails } from "@/interfaces/countryDetails";
import { ICountry } from "@/interfaces/country";
import { ParsedUrlQuery } from "querystring";
import DataList from "@/components/DataList";
import Borders from "@/components/Borders";

interface CountryDetailsProps {
  country: ICountryDetails;
}

interface IParams extends ParsedUrlQuery {
  name: string;
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  const {
    borderCountries,
    name,
    capital,
    currencies,
    domain,
    flag,
    languages,
    nativeName,
    population,
    region,
    subregion,
  } = country;

  const languageNames = languages.map((language) => language.name);
  const currencyNames = currencies.map((currency) => currency.name);

  return (
    <section className="px-5 md:px-12">
      <Link
        href="/"
        className="bg-white flex items-center my-12 w-[180px] px-12 py-1 shadow-md"
      >
        <span className="text-2xl mr-4">&larr; </span>
        <span className="font-light">Back</span>
      </Link>
      <div>
        <Image
          src={flag}
          alt={`${name} flag`}
          width={100}
          height={100}
          className="w-full"
        />
        <div>
          <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-2xl font-black mt-10 mb-8">{name}</h2>
            <p>
              <span className="font-black">Native Name:</span> {nativeName}
            </p>
            <p>
              <span className="font-black">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-black">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-black">Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span className="font-black">Capital: </span>
              {capital}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-black">Top Level Domain: </span>
              {domain}
            </p>
            <DataList array={currencyNames} title="Currencies" />
            <DataList array={languageNames} title="Languages" />
            <Borders borderCountries={borderCountries} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { name } = context.params as IParams;

  const res = await fetch(`http://localhost:3000/api/countries/${name}`);

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/countries");

  const countries = await res.json();

  const names = countries.map((country: ICountry) => country.name);
  const paths = names.map((name: string) => ({
    params: { name: name.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default CountryDetails;
