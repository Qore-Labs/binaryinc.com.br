"use client";

import { ContactFormType } from "@/schemas/contact";
import { SubmitHandler, useForm } from "react-hook-form";

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<ContactFormType>();

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center-safe justify-center-safe gap-2"
    >
      <input
        type="email"
        {...register("email")}
        id="email"
        placeholder="Seu melhor e-mail corporativo"
        required
        className="bg-white w-82.25 h-12 px-4 py-3.5 rounded placeholder:text-[#777680] outline-none"
      />
      <button
        type="submit"
        className="bg-(--green) h-12 rounded w-27.75 cursor-pointer hover:brightness-110 transition-all"
      >
        Enviar
      </button>
    </form>
  );
};
