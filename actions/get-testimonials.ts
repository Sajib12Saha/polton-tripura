import { Testimonial } from "@/types/type";

type testimonialResponseType= {
  data:Testimonial[]
}

export const getTestimonials = async (): Promise<testimonialResponseType> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/testimonials`, { method: "GET",    cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch testimonials");

  const data = await res.json(); 

  return data;
};
