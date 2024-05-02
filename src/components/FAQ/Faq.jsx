import React from 'react'
import { yogaFAQs } from '../../data'

const Faq = () => {
  return (
    <div>

<div>
      <h2>Yoga FAQs</h2>
      <ul>
        {Object.keys(yogaFAQs).map((key) => (
          <li key={key}>
            <h3>{yogaFAQs[key].question}</h3>
            <p>{yogaFAQs[key].answer}</p>
          </li>
        ))}
      </ul>
    </div>

    </div>
  )
}

export default Faq