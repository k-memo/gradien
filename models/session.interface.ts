import z from 'zod';

export interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}

export const ZISession = z.object({
  user: z.object({
    name: z.string(),
    email: z.string(),
    image: z.string(),
  }),
  expires: z.string(),
});
