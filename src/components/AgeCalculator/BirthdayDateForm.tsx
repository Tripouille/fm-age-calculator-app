"use client";

import { BirthdayDate, BirthdayDateSchema } from "@/utils/BirthdayDate";
import { useForm } from "react-hook-form";
import styles from "./AgeCalculator.module.scss";
import { BirthdayDateInput } from "./BirthdayDateInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { BIRTHDAY_DATE_FORM_IDS } from "./constant";

export interface BirthdayDateFormProps {
  onSubmit: (date: BirthdayDate) => void;
}

export const BirthdayDateForm = ({ onSubmit }: BirthdayDateFormProps) => {
  const { register, formState, trigger, handleSubmit } = useForm<BirthdayDate>({
    resolver: zodResolver(BirthdayDateSchema),
    mode: "onBlur",
  });

  function revalidateAllFields() {
    trigger(["day", "month", "year"]);
  }

  const registerOptions = {
    onBlur: revalidateAllFields,
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
