"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sendEmail } from "@/app/_actions";
import { ContactFormSchema } from "@/lib/schema";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { services: [], honeypot: "", phone: "" },
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("email sent");
      reset();
      return;
    } else {
      console.log("sendEmail error", result?.error);
      toast.error("something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="p-8">
      <h2 className="font-bold text-xl sm:text-2xl text-fr-primary mb-2">
        Send us a message
      </h2>
      <p className="font-light text-balance mb-8">
        Complete the form below and a member of our team will be in touch as
        soon as possible.
      </p>
      {/* honeypot */}
      <div className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>
      {/* name */}
      <div className="mb-8">
        <label
          htmlFor="name"
          className="font-bold block mb-1 text-fr-primary w-fit"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          className="w-full rounded-sm border border-fr-primary p-2 max-w-[40ch] "
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>
      {/* phone */}
      <div className="mb-8">
        <label
          htmlFor="phone"
          className="font-bold block mb-1 text-fr-primary w-fit"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          autoComplete="phone"
          className="w-full rounded-sm border border-fr-primary p-2 max-w-[40ch]"
          {...register("phone")}
        />
        {errors.phone?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.phone.message}
          </p>
        )}
      </div>
      {/* email */}
      <div className="mb-8">
        <label
          htmlFor="email"
          className="font-bold block mb-1 text-fr-primary w-fit"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          className="w-full rounded-sm border border-fr-primary p-2 max-w-[40ch]"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      {/* location */}
      <div className="mb-8">
        <label
          htmlFor="location"
          className="font-bold block mb-1 text-fr-primary w-fit"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          autoComplete="address-level2"
          className="w-full rounded-sm border border-fr-primary p-2 max-w-[40ch]"
          {...register("location")}
        />
        {errors.location?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.location.message}
          </p>
        )}
      </div>
      {/* service */}
      <div className="mb-8">
        <fieldset>
          <legend className="font-bold mb-4 text-fr-primary">
            Please select the service you require
          </legend>
          <div className="flex flex-col gap-8">
            <label htmlFor="blocked-drain" className="w-fit">
              <input
                type="checkbox"
                id="blocked-drain"
                value="Blocked-drain"
                className="inline-block mr-2"
                {...register("services")}
              />
              Blocked Drain
            </label>
            <label htmlFor="cctv-survey" className="w-fit">
              <input
                type="checkbox"
                id="cctv-survey"
                value="cctv-survey"
                className="mr-2 inline-block"
                {...register("services")}
              />
              CCTV Survey
            </label>
            <label htmlFor="jetting" className="w-fit">
              <input
                type="checkbox"
                id="jetting"
                value="jetting"
                className="inline-block mr-2"
                {...register("services")}
              />
              High Pressure Water Jetting
            </label>
            <label htmlFor="patch-liners" className="w-fit">
              <input
                type="checkbox"
                id="patch-liners"
                value="patch-liners"
                className="inline-block mr-2"
                {...register("services")}
              />
              Patch Liners / No-Dig Repairs
            </label>
            <label htmlFor="root-intrusion" className="w-fit">
              <input
                type="checkbox"
                id="root-intrusion"
                value="root-intrusion"
                className="inline-block mr-2"
                {...register("services")}
              />
              Root Intrusion Removal
            </label>
            <label htmlFor="commercial" className="w-fit">
              <input
                type="checkbox"
                id="commercial"
                value="commercial"
                className="inline-block mr-2"
                {...register("services")}
              />
              Commercial Drainage
            </label>
            <label htmlFor="other" className="w-fit">
              <input
                type="checkbox"
                id="other"
                value="other"
                className="inline-block mr-2"
                {...register("services")}
              />
              Other
            </label>
          </div>
        </fieldset>
        {errors.services?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.services.message}
          </p>
        )}
      </div>
      {/* container 2 */}
      {/* message */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="font-bold block mb-1 text-fr-primary w-fit"
        >
          Message
        </label>
        <textarea
          id="message"
          cols={5}
          rows={10}
          className="w-full rounded-lg border border-fr-primary p-2"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        className="font-bold bg-fr-accent-one text-fr-white px-8 py-4 rounded-sm hover:bg-fr-accent-one-mid cursor-pointer transition-colors duration-150"
        disabled={isSubmitting}
      >
        {isSubmitting ? "sending..." : "Send Message"}
      </button>
    </form>
  );
}
