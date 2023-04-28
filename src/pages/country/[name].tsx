import { GetStaticProps } from "next";
import React from "react";
import { ICountryDetails } from "@/interfaces/countryDetails";
import { ICountry } from "@/interfaces/country";

interface CountryDetailsProps {
  country: ICountryDetails;
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  console.log(country);
  return <div>CountryDetails</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params.name;

  const res = await fetch(`http://localhost:3000/api/countries/${name}`);

  const country = await res.json();

  console.log(country);

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
