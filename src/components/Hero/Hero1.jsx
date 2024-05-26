import React from "react";
import { Link } from "react-router-dom";
import sangayoga from "../../assets/images/sangayoga.jpg";

const Hero1 = () => {
  return (
    <div
      className="bg-gray-100 flex justify-center"
      style={{
        backgroundImage: `url(${''})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section className="py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center lg:max-w-[70%] ">
        <div className="container px-4 md:px-6 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Yoga Hero"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="600"
              src={sangayoga}
              width="800"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-10">
                <h1 className="text-3xl font-bold tracking-tighter leading-loose sm:text-5xl xl:text-6xl">
                  Transform Your Body and Mind with{" "}
                  <span className="text-purple-500">Hike & Yoga</span>
                </h1>

                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join our hike and yoga classes and experience the
                  transformative power of mindfulness.
                </p>
              </div>
              <div className="py-[12px] flex flex-col gap-3 min-[400px]:flex-row">
                <Link to="/login"
                  className="bg-purple-500 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href=""
                >
                  Get Started
                </Link>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="bg-white text-black inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href=""
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
