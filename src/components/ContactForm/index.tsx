"use client";

import { SendContactEmails } from "@/lib/resend";
import { ContactFormType } from "@/schemas/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export const ContactForm = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormType>();

  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    try {
      setIsSending(true);

      const result = await SendContactEmails(data.email);

      if (!result.success) {
        console.error("Erro ao enviar contato:", result.error);
        return;
      }

      reset();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center-safe justify-center-safe gap-2 max-lg:flex-col max-lg:w-full relative"
      >
        <p
          className={`absolute top-full mt-2 text-sm text-(--green) transition-all duration-300 ${
            success
              ? "opacity-100 -translate-y-20 max-lg:-translate-y-35"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          ✓ Recebemos seu contato.
        </p>

        <input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Seu melhor e-mail corporativo"
          required
          className="bg-white w-82.25 h-12 px-4 py-3.5 rounded placeholder:text-[#777680] outline-none max-lg:w-full"
        />

        <button
          type="submit"
          disabled={isSending}
          className="bg-(--green) h-12 rounded w-27.75 cursor-pointer hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed max-lg:w-full"
        >
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};
