import styles from "./AgeCalculator.module.scss";

export interface BirthdayDateInputProps {
  id: string;
  label: string;
  placeholder: string;
}

export const BirthdayDateInput = ({
  id,
  label,
  placeholder,
}: BirthdayDateInputProps) => {
  return (
    <label className={styles["age_calculator__birthday-date-form__input"]}>
      {label}
      <input id={id} placeholder={placeholder} type="text" />
    </label>
  );
};
