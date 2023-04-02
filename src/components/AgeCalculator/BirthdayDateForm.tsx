"use client";

import { BirthdayDate, birthdayDateSchema } from "@/utils/birthdayDate";
import { useForm } from "react-hook-form";
import styles from "./AgeCalculator.module.scss";
import { BirthdayDateInput } from "./BirthdayDateInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { BIRTHDAY_DATE_FORM_IDS } from "./constant";
import { isEmptyString } from "@/utils/isEmptyString";

export interface BirthdayDateFormProps {
  onSubmit: (date: BirthdayDate) => void;
}

export const BirthdayDateForm = ({ onSubmit }: BirthdayDateFormProps) => {
  const { register, formState, trigger, handleSubmit, getValues } =
    useForm<BirthdayDate>({
      resolver: zodResolver(birthdayDateSchema),
      mode: "onBlur",
    });

  function revalidateNonEmptyFields() {
    const fields = getValues();
    const nonEmptyFieldKeys = Object.keys(fields).filter(
      (fieldKey) => !isEmptyString(fields[fieldKey as keyof typeof fields])
    ) as (keyof typeof fields)[];
    trigger(nonEmptyFieldKeys);
  }

  const registerOptions = {
    onBlur: revalidateNonEmptyFields,
  };

  return (
    <form
      id={BIRTHDAY_DATE_FORM_IDS.form}
      className={styles["age_calculator__birthday-date-form"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <BirthdayDateInput
        id={BIRTHDAY_DATE_FORM_IDS.day}
        label="DAY"
        placeholder="DD"
        {...register("day", registerOptions)}
        invalidMessage={formState.errors.day?.message}
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_FORM_IDS.month}
        label="MONTH"
        placeholder="MM"
        {...register("month", registerOptions)}
        invalidMessage={formState.errors.month?.message}
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_FORM_IDS.year}
        label="YEAR"
        placeholder="YYYY"
        {...register("year", registerOptions)}
        invalidMessage={formState.errors.year?.message}
      />
    </form>
  );
};
