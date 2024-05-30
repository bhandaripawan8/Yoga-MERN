import React from 'react'

const Booking = () => {
  return (
    <>

        <div className="container mx-auto p-4 text-white dark:text-white">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">90-Minute Cruise & Open Bar in Miami</h1>
              <div className="flex items-center text-zinc-500">
                <span className="text-yellow-500">★ 5</span>
                <span>(3 Reviews) · New Jersey</span>
              </div>
              <div className="flex space-x-4 my-4">
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/24x24" alt="Duration icon" className="w-6 h-6"/>
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div>Full day</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/24x24" alt="Cancellation icon" className="w-6 h-6"/>
                  <div>
                    <div className="font-semibold">Cancellation</div>
                    <div>No Cancel</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/24x24" alt="Group Size icon" className="w-6 h-6"/>
                  <div>
                    <div className="font-semibold">Group Size</div>
                    <div>10 people</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/24x24" alt="Languages icon" className="w-6 h-6"/>
                  <div>
                    <div className="font-semibold">Languages</div>
                    <div>English, Francais</div>
                  </div>
                </div>
              </div>
              <hr className="my-4"/>
              <h2 className="text-xl font-semibold">About this activity</h2>
              <p className="text-zinc-700 my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <h2 className="text-xl font-semibold mt-4">Highlights</h2>
              <ul className="list-disc list-inside text-zinc-700">
                <li>Discover Hollywood and celebrate its iconic landmarks such as the Walk of Fame.</li>
                <li>Soak in the views of the ever vibrant City of Angels.</li>
                <li>Marvel at the spectacular Hollywood Sign, the quintessential symbol of Los Angeles.</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-semibold">Included/Excluded</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-700">
                <ul className="list-disc list-inside">
                  <li>Specialized bilingual guide</li>
                  <li>Private Transport</li>
                  <li>Entrance fees (Cable car and Moon Valley)</li>
                  <li>Box lunch water, banana apple and chocolate</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Additional Services</li>
                  <li>Insurance</li>
                  <li>Drink</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 mt-4 lg:mt-0 lg:ml-4">
              <div className="text-zinc-500 dark:text-zinc-300">From: <span className="text-white dark:text-white font-bold">€0,00</span></div>
              <div className="mt-4">
                <label className="block text-zinc-700 dark:text-zinc-300">Date</label>
                <input type="date" className="w-full border rounded-lg p-2 mt-1"/>
              </div>
              <div className="mt-4">
                <label className="block text-zinc-700 dark:text-zinc-300">Adults</label>
                <div className="flex items-center border rounded-lg p-2 mt-1">
                  <button className="text-zinc-500 dark:text-zinc-300">-</button>
                  <span className="mx-2">0</span>
                  <button className="text-zinc-500 dark:text-zinc-300">+</button>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-zinc-700 dark:text-zinc-300">Children</label>
                <div className="flex items-center border rounded-lg p-2 mt-1">
                  <button className="text-zinc-500 dark:text-zinc-300">-</button>
                  <span className="mx-2">0</span>
                  <button className="text-zinc-500 dark:text-zinc-300">+</button>
                </div>
              </div>
              <div className="mt-4 text-lg font-bold">Total €0,00</div>
              <button className="w-full bg-blue-500 dark:bg-blue-700 text-white dark:text-white py-2 rounded-lg mt-4">Book now</button>
            </div>
          </div>
        </div>

        </>
  )
}

export default Booking