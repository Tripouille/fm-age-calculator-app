"use client";

import { BirthdayDate, BirthdayDateSchema } from "@/utils/BirthdayDate";
import { useForm } from "react-hook-form";
import styles from "./AgeCalculator.module.scss";
import { BirthdayDateInput } from "./BirthdayDateInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { BIRTHDAY_DATE_SELECTOR_IDS } from "./constant";

export const BirthdayDateForm = () => {
  const { register, formState, trigger } = useForm<BirthdayDate>({
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
      id={BIRTHDAY_DATE_SELECTOR_IDS.form}
      className={styles["age_calculator__birthday-date-form"]}
    >
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.day}
        label="DAY"
        placeholder="DD"
        {...register("day", registerOptions)}
        invalidMessage={formState.errors.day?.message}
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.month}
        label="MONTH"
        placeholder="MM"
        {...register("month", registerOptions)}
        invalidMessage={formState.errors.month?.message}
      />
      <BirthdayDateInput
        id={BIRTHDAY_DATE_SELECTOR_IDS.year}
        label="YEAR"
        placeholder="YYYY"
        {...register("year", registerOptions)}
        invalidMessage={formState.errors.year?.message}
      />
    </form>
  );
};
