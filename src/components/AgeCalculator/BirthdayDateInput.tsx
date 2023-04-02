import { forwardRef } from "react";
import styles from "./AgeCalculator.module.scss";

interface BirthdayDateInputProps {
  id: string;
  label: string;
  placeholder: string;
  invalidMessage?: string;
}

export const BirthdayDateInput = forwardRef<
  HTMLInputElement,
  BirthdayDateInputProps
>(({ id, label, placeholder, invalidMessage, ...rest }, ref) => {
  return (
    <label
      className={styles["age_calculator__birthday-date-form__input"]}
      aria-invalid={Boolean(invalidMessage)}
    >
      {label}
      <input
        id={id}
        placeholder={placeholder}
        type="text"
        ref={ref}
        {...rest}
      />
      <span>{invalidMessage}</span>
    </label>
  );
});

BirthdayDateInput.displayName = "BirthdayDateInput";
