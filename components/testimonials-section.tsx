"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "I've tried different platforms, but this one is by far the most seamless. My gift cards arrive instantly and the payment process is smooth and secure.",
    name: "Chinedu A",
    image: "/9f7de6166d6c03f86eb17bebd2a037a1e9e329bd.png",
  },
  {
    id: 2,
    quote:
      "Secure, fast, and very reliable. I use it almost every week for gaming cards and it has never failed me.",
    name: "Daniel K.",
    image: "/53503fbf3ec9887387a4506bb8a53e3ed9fe182d.png",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-white px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Title */}
        <div className="mb-16 flex items-center justify-center gap-8">
          <div className="h-px w-24 bg-gray-300"></div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            TESTIMONIALS
          </h2>
          <div className="h-px w-24 bg-gray-300"></div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2">
                <div className="flex overflow-hidden rounded-2xl border-2 border-[#0D9488] bg-white">
                  {/* Text Content */}
                  <div className="flex flex-1 flex-col justify-between bg-white p-8">
                    <p className="mb-6 text-center text-lg text-gray-900">
                      {testimonial.quote}
                    </p>
                    <p className="text-center text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-[320px] w-[200px] flex-shrink-0 bg-[#C4A57B]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
