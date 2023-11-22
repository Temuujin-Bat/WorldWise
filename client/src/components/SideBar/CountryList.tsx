import Message from "../Message";
import Spinner from "../Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

type CountryListProps = {
  countries: {
    cityName: string;
    country: string;
    emoji: string;
    date: string;
    notes: string;
    position: {
      lat: number;
      lng: number;
    };
    id: number;
  }[];
  isLoading: boolean;
};

export default function CountryList(props: CountryListProps) {
  if (props.isLoading) {
    return <Spinner />;
  }

  if (!props.countries.length) {
    return <Message message="Add your first city by clicking on the map" />;
  }

  return (
    <ul className={styles.countryList}>
      {props.countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}
