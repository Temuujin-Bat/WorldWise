import Message from "../Message";
import Spinner from "../Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

type CityListProps = {
  cities: {
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

export default function CityList(props: CityListProps) {
  if (props.isLoading) {
    return <Spinner />;
  }

  if (!props.cities.length) {
    return <Message message="Add your first city by clicking on the map" />;
  }
  return (
    <ul className={styles.cityList}>
      {props.cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
