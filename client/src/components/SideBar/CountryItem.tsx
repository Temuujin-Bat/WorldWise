import styles from "./CountryItem.module.css";

type CountryItemProps = {
  country: {
    country: string;
    emoji: string;
    id: number;
  };
};

export default function CountryItem(props: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{props.country.emoji}</span>
      <span>{props.country.country}</span>
    </li>
  );
}
