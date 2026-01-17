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
    defaultValues: { service: "other", honeypot: "", phone: "" },
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
      <h2 className="font-bold text-xl sm:text-2xl text-fr-primary mb-2 text-center md:text-start">
        Send us a message
      </h2>
      <p className="font-light text-balance mb-8 text-center max-w-[80ch] md:text-start">
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
      <div className="max-w-100 mx-auto grid grid-cols-1 md:max-w-full md:grid-cols-2 md:gap-x-8">
        <div>
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
              className="w-full rounded-sm border border-fr-primary p-2 max-w-[60ch] "
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
              className="w-full rounded-sm border border-fr-primary p-2 max-w-[60ch]"
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
              className="w-full rounded-sm border border-fr-primary p-2 max-w-[60ch]"
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
              Postcode
            </label>
            {/* <p className="text-xs">
              This allows us to understand what engineers we have in your area
            </p> */}
            <input
              type="text"
              id="location"
              autoComplete="address-level2"
              className="w-full rounded-sm border border-fr-primary p-2 max-w-[60ch]"
              {...register("location")}
            />
            {errors.location?.message && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>
        <div>
          {/* service */}
          <div className="mb-9">
            <label
              htmlFor="service"
              className="font-bold mb-1 text-fr-primary block w-fit"
            >
              Service Required
            </label>
            <select
              id="service"
              className="w-full rounded-sm border border-fr-primary p-2 max-w-[60ch]"
              {...register("service")}
              defaultValue="other"
            >
              <option value="blocked-drains">Blocked Drains</option>
              <option value="cctv-survey">CCTV Drainage Surveys</option>
              <option value="water-jetting">High Pressure Water Jetting</option>
              <option value="patch-lining">
                Patch Liners / No-Dig Repairs
              </option>
              <option value="root-removal">Root Intrusion Removal</option>
              <option value="commercial-drainage">Commercial Drainage</option>
              <option value="other">Other</option>
            </select>
            {errors.service?.message && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.service.message}
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
              className="w-full max-h-62 rounded-lg border border-fr-primary p-2"
              {...register("message")}
            />
            {errors.message?.message && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            className="font-bold bg-fr-accent-one text-fr-white px-8 py-4 rounded-sm hover:bg-fr-accent-one-mid cursor-pointer transition-colors duration-150 block md:w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}
