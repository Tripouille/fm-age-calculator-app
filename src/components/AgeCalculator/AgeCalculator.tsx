import styles from "./AgeCalculator.module.scss";
import { AgeCalculatorResult } from "./AgeCalculatorResult";
import { AgeCalculatorSpacer } from "./AgeCalculatorSpacer";
import { BirthdayDateForm } from "./BirthdayDateForm";

export const AgeCalculator = () => {
  return (
    <section className={styles.age_calculator}>
      <BirthdayDateForm />
      <AgeCalculatorSpacer />
      <AgeCalculatorResult years={0} months={1} days={4} />
    </section>
  );
};
