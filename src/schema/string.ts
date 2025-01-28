import { type } from "arktype";
import { z } from "zod";
import * as v from "valibot";

export const arktype = type("string > 0");

export const valibot = v.pipe(v.string(), v.minLength(1));

export const zod = z.string().min(1);
