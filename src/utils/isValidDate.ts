import { isValid, parse } from "date-fns";

export function isValidDate(
  day: string,
  month: string,
  year: string,
  referenceDate: Date = new Date()
) {
  const parsed = parse(`${day}/${month}/${year}`, "dd/MM/yyyy", referenceDate);
  return isValid(parsed);
}
