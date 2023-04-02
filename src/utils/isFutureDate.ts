import { isFuture, parse } from "date-fns";

export function isFutureDate(
  date: { day: string; month: string; year: string },
  referenceDate: Date = new Date()
) {
  const parsed = parse(
    `${date.day}/${date.month}/${date.year}`,
    "dd/MM/yyyy",
    referenceDate
  );
  return isFuture(parsed);
}
