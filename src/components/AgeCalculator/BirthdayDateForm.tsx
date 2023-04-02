import styles from "./AgeCalculator.module.scss";
import { BirthdayDateInput } from "./BirthdayDateInput";

export const BIRTHDAY_DATE_SELECTOR_IDS = {
  form: "birthday_date_form",
  day: "day",
  month: "month",
  year: "year",
} as const;

export const BirthdayDateForm = () => {
  return (
    <form
      id={BIRTHDAY_DATE_SELECTOR_IDS.form}
      className={styles["age_calculator__birthday-date-form"]}
    >
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.day}
        label="DAY"
        placeholder="DD"
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.month}
        label="MONTH"
        placeholder="MM"
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.year}
        label="YEAR"
        placeholder="YYYY"
      />
    </form>
  );
};
