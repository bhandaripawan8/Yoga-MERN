import React from "react";


const AboutMe = () => {
  function ActivityIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
    )
  }
  
  
  function AirVentIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 8h12" />
        <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
        <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
      </svg>
    )
  }
  
  
  function CompassIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    )
  }
  
  
  function LaptopIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    )
  }
  
  
  function MagnetIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
        <path d="m5 8 4 4" />
        <path d="m12 15 4 4" />
      </svg>
    )
  }
  
  
  function ScalingIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M14 15H9v-5" />
        <path d="M16 3h5v5" />
        <path d="M21 3 9 15" />
      </svg>
    )
  }


  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEF3C7] dark:bg-[#4B5563]">
            <LaptopIcon className="h-6 w-6 text-[#D97706] dark:text-[#F59E0B]" />
          </div>
          <h3 className="text-lg font-semibold">Holistic Well-being</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Emphasize the holistic benefits of yoga and adventure, focusing on physical, mental, and spiritual
            well-being.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E0E7FF] dark:bg-[#4B5563]">
            <ActivityIcon className="h-6 w-6 text-[#4F46E5] dark:text-[#818CF8]" />
          </div>
          <h3 className="text-lg font-semibold">Authenticity</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Highlight your personal journey and commitment to yoga and adventure, showcasing your genuine passion and
            expertise.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1FAE5] dark:bg-[#4B5563]">
            <MagnetIcon className="h-6 w-6 text-[#047857] dark:text-[#34D399]" />
          </div>
          <h3 className="text-lg font-semibold">Connection</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Emphasize the importance of connecting with oneself, nature, and others through yoga and adventure
            experiences.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEE2E2] dark:bg-[#4B5563]">
            <AirVentIcon className="h-6 w-6 text-[#B91C1C] dark:text-[#F87171]" />
          </div>
          <h3 className="text-lg font-semibold">Community</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Build a community of like-minded individuals who share a passion for yoga, adventure, and personal growth.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] dark:bg-[#4B5563]">
            <CompassIcon className="h-6 w-6 text-[#065F46] dark:text-[#10B981]" />
          </div>
          <h3 className="text-lg font-semibold">Adventure</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Promote a sense of adventure and exploration, encouraging people to step out of their comfort zones and
            discover new experiences.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6] dark:bg-[#4B5563]">
            <ScalingIcon className="h-6 w-6 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>
          <h3 className="text-lg font-semibold">Sustainability</h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Advocate for sustainable practices in yoga and adventure tourism, promoting environmental conservation and
            responsible travel.
          </p>
        </div>
      </div>
    </section>

  )}
export default AboutMe;
