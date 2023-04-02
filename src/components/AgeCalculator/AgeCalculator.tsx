"use client";

import { BirthdayDate } from "@/utils/birthdayDateSchema";
import { calculateAge } from "@/utils/calculateAge";
import { useState } from "react";
import styles from "./AgeCalculator.module.scss";
import { AgeCalculatorResult } from "./AgeCalculatorResult";
import { AgeCalculatorSpacer } from "./AgeCalculatorSpacer";
import { BirthdayDateForm } from "./BirthdayDateForm";

export const AgeCalculator = () => {
  const [age, setAge] = useState({
    years: "",
    months: "",
    days: "",
  });

  function handleSubmit(birthdayDate: BirthdayDate) {
    setAge(calculateAge(birthdayDate));
  }

  return (
    <section className={styles.age_calculator}>
      <BirthdayDateForm onSubmit={handleSubmit} />
      <AgeCalculatorSpacer />
      <AgeCalculatorResult
        days={age.days}
        months={age.months}
        years={age.years}
      />
    </section>
  );
};
