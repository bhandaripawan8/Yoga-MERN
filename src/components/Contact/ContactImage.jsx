import React from 'react'
import contact1 from "../../assets/images/photoshoot2.jpg";

const ContactImage = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <img
              alt="Yoga pose"
              className="rounded-xl shadow-lg"
              src={contact1}
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
                width: "100%",
                maxWidth: "400px",
              }}
            />
          </div>

    </div>
  )
}

export default ContactImage