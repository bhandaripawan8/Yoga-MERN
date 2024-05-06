import React from 'react'
import { aboutMe } from '../../data' 

const AboutUs = () => {
    const {ourStory} = aboutMe;

  return (
    <div>
        <h2>Our Story</h2>
      <p className="about-me-story">{ourStory}</p>

    </div>
  )
}

export default AboutUs