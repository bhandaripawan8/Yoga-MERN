import { whyChoosePrayogi } from "../../data";
import sessions1 from "../../assets/images/sessions1.png";
import sessions2 from "../../assets/images/sessions2.png";
import sessions3 from "../../assets/images/sessions3.png";

const icons = [sessions1, sessions2, sessions3]

const WhyChooseContent = () => {

  return (
    <>
       <section className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Prayogi?</h2>
            <p className="text-lg text-gray-500">Discover the benefits of practicing yoga with Prayogi.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          {whyChoosePrayogi.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt="Yoga Mat"
                      className="h-12 w-12"
                      src={icons[index]}
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-medium text-gray-900">{item.header}</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseContent;
