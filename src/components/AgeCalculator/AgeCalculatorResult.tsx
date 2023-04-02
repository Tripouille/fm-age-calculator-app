import styles from "./AgeCalculator.module.scss";
import { BIRTHDAY_DATE_FORM_IDS } from "./constant";

export interface AgeCalculatorResultProps {
  years: number;
  months: number;
  days: number;
}

export const AgeCalculatorResult = ({
  years,
  months,
  days,
}: AgeCalculatorResultProps) => {
  const { day, month, year, form } = BIRTHDAY_DATE_FORM_IDS;
  const htmlFor = `${day} ${month} ${year}`;

  return (
    <output
      htmlFor={htmlFor}
      form={form}
      className={styles.age_calculator__result}
    >
      <AgeCalculatorResultValue value={years} />
      <span>years</span>
      <AgeCalculatorResultValue value={months} />
      <span>months</span>
      <AgeCalculatorResultValue value={days} />
      <span>days</span>
    </output>
  );
};

function AgeCalculatorResultValue({ value }: { value: number }) {
  if (!value) return <span>- -</span>;

  return <span>{value}</span>;
}
