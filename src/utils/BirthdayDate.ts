import { z } from "zod";
import { isEmptyString } from "./isEmptyString";
import { isFutureDate } from "./isFutureDate";
import { isNumberRegex } from "./isNumberRegex";
import { isValidDate } from "./isValidDate";

export const BirthdayDateSchema = z
  .object({
    day: z.string().refine((val) => {
      /* Skip validation if val is empty */
      if (isEmptyString(val)) return true;
      if (!isNumberRegex.test(val)) return false;
      const day = parseInt(val);
      return day >= 1 && day <= 31;
    }, "Must be a valid day"),
    month: z.string().refine((val) => {
      /* Skip validation if val is empty */
      if (isEmptyString(val)) return true;
      if (!isNumberRegex.test(val)) return false;
      const month = parseInt(val);
      return month >= 1 && month <= 12;
    }, "Must be a valid month"),
    year: z.string().refine((val) => {
      /* Skip validation if val is empty */
      if (isEmptyString(val)) return true;
      if (!isNumberRegex.test(val)) return false;
      const year = parseInt(val);
      return year >= 1;
    }, "Must be a valid year"),
  })
  .superRefine(({ day, month, year }, ctx) => {
    /* Skip validation if a value is missing */
    if (![day, month, year].every(Boolean)) return;
    const dateIsValid = isValidDate({ day, month, year });
    const dateIsFuture = isFutureDate({ day, month, year });

    if (dateIsFuture) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["day"],
        message: "Must be a past date",
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["month"],
        message: "Must be a past date",
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["year"],
        message: "Must be a past date",
      });
    } else if (!dateIsValid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["day"],
        message: "Must be a valid date",
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["month"],
        message: "Must be a valid date",
        params: { day, month, year },
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["year"],
        message: "Must be a valid date",
      });
    }
  });

export type BirthdayDate = z.infer<typeof BirthdayDateSchema>;
