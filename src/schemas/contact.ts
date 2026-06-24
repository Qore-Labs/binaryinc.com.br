import z from "zod";

const ContactForm = z.object({
  email: z.email({
    pattern: z.regexes.email,
    error: "Necessário informar um e-mail válido",
  }),
});

export type ContactFormType = z.infer<typeof ContactForm>;
export default ContactForm;
