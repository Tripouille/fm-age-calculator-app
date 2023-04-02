import {
  add,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parse,
} from "date-fns";
import { BirthdayDate } from "./BirthdayDate";

export function calculateAge(
  birthdayDate: BirthdayDate,
  referenceDate: Date = new Date()
): {
  years: string;
  months: string;
  days: string;
} {
  const date = parse(
    `${birthdayDate.day}/${birthdayDate.month}/${birthdayDate.year}`,
    "dd/MM/yyyy",
    referenceDate
  );

  const years = differenceInYears(referenceDate, date);
  const months = differenceInMonths(referenceDate, add(date, { years }));
  const days = differenceInDays(referenceDate, add(date, { years, months }));
  return {
    years: years.toString(),
    months: months.toString(),
    days: days.toString(),
  };
}
