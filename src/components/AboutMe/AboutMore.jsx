

import React from 'react'
import { aboutMe } from "../../data";

const AboutMore = () => {
    const { ourStory } = aboutMe;

  return (
    <div className='flex items-center justify-center mt-[100px]'>
        <p className='max-w-[600px] text-gray-500 md:text-sm/relaxed lg:text-sm/relaxed sm:text-sm/relaxed dark:text-gray-400'>{ourStory}</p>

    </div>
  )
}

export default AboutMore