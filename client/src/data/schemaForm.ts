import * as z from 'zod';
import { error } from './userMessage';

export const schemaUserForm = z.object({
  name: z.string().min(2, { message: error.required }),
  email: z.string()
    .min(2, { message: error.required })
    .email({ message: error.email }).min(1, { message: error.required }),
});
