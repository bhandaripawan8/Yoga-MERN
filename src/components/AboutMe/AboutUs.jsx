import { Link } from "react-router-dom";
import Values from './Values'
import sangaYoga from "../../assets/images/sangayoga.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="w-full md:py-24 lg:py-10 flex items-center justify-center shadow-sm">
        <div className="h-auto grid items-center justify-center md:px-6 lg:grid-cols-2 lg:gap-12 lg:max-w-7xl px-4 py-16">
          <div className="h-auto space-y-4  flex flex-col gap-4 bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-4xl font-bold tracking-tighter lg:pb-5">
              Get to Know My Journey
            </h2>
            <p className="max-w-prose text-gray-600 text-sm md:text-base lg:text-[15px]">
              Prakriti's journey with yoga began in the serene moments of her
              childhood, where she found solace and joy practicing alongside her
              neighbor, a nurturing yoga instructor. These early experiences
              sowed the seeds of a profound connection with yoga and meditation,
              a bond that would endure and flourish in the years to come. The
              tumultuous year of 2019, marked by the COVID-19 pandemic, became a
              pivotal moment for Prakriti. Seeking refuge from the chaos and
              uncertainty, she turned to yoga once more, this time with a
              newfound dedication and purpose. Starting with humble beginnings,
              following online videos and practicing diligently, Prakriti's
              passion for yoga blossomed.
            </p>
            <div>
              <Link to="/about">
                <button className="py-2 px-6 bg-purple-600 text-white rounded-md transition duration-300 hover:bg-black">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[50vh] w-full flex justify-center items-center">
            <img
              alt="Profile Picture"
              className="h-full w-full mx-auto rounded-xl rounded-lg object-cover px-4"
              src={sangaYoga}
            />
          </div>
        </div>
      </section>
      <section>
        <Values/>
      </section>
    </>
  );
};

export default AboutUs;
