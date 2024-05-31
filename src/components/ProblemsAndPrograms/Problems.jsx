import React from "react";
import image2 from "../../assets/images/photoshoot7.jpg";
import image1 from "../../assets/images/photoshoot10.jpg";

const Problems = () => {
  return (
    <>
<div className="bg-zinc-100 dark:bg-zinc-800 p-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
        PROBLEMS WE ARE SOLVING
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Stress and anxiety
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Participants can relieve stress and anxiety through mindfulness and yoga practices, improving their overall well-being.
          </p>
        </div>
        <hr className="border-zinc-300 dark:border-zinc-600" />
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Disconnect from nature
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Participants can reconnect with nature through outdoor yoga sessions, hiking and other outdoor activities, promoting a sense of peace and harmony.
          </p>
        </div>
        <hr className="border-zinc-300 dark:border-zinc-600" />
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Lack of physical activity
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            The program provides opportunities for participants to engage in physical activity, promoting a healthier lifestyle and boosting energy levels.
          </p>
        </div>
        <hr className="border-zinc-300 dark:border-zinc-600" />
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Poor work-life balance
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            The retreat provides a structured schedule, allowing participants to focus solely on their health and wellness, promoting a better work-life balance.
          </p>
        </div>
        <hr className="border-zinc-300 dark:border-zinc-600" />
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Burnout
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            The serene mountain setting and structured yoga practices provide a much-needed break from the daily routine, helping participants avoid burnout and rejuvenate.
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col space-y-8 h-[80vh]">
      <div className="flex-1">
        <img
          src={image1}
          alt="Meditation"
          className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={image2}
          alt="Nature"
          className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Problems;
