import { isFuture, parse } from "date-fns";

export function isFutureDate(
  day: string,
  month: string,
  year: string,
  referenceDate: Date = new Date()
) {
  const parsed = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", referenceDate);
  return isFuture(parsed);
}
