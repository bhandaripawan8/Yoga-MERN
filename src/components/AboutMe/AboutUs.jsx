import { Link } from "react-router-dom";
import about1 from "../../assets/images/aboutme.png";

const AboutUs = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get to Know My Journey
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-sm/relaxed lg:text-sm/relaxed sm:text-sm/relaxed dark:text-gray-400">
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
              <Link to={'/about'}>
                <button className="py-2 px-4 bg-purple-600 text-white rounded-md transition duration-300 hover:bg-purple-700">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Profile Picture"
              className="h-[300px] w-[200px] sm:h-[400px] sm:w-[300px] md:h-[500px] md:w-[350px] mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              src={about1}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
