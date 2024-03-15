import React from 'react'

const Home = () => {
  return (
    <>
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg: flex-row gap-[90px] items-center justify-between'>
              {/* hero content */}
          </div>
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Let's collaborate to grow the peace of mind</h1>
              <p className='text__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit mollitia itaque repudiandae. Quo, nam tenetur! Nulla, ea, magnam nam recusandae minima quia blanditiis fuga, a eius officiis nostrum excepturi ut!</p>
              <button className='btn'>Request an Appointment</button>
            </div>
          </div>
        </div>
    </section>
    </>

  )
}

export default Home