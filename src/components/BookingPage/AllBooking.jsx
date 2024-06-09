import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const fetchBooking = async(email) =>{
    try{
       const response = await axios.get('/booking',{
            params: {email}
        });
        console.log('Bookings:', response.data)
        return response.data;
    }
    catch(error){
        console.error('Error fetching bookings', error)
        return []
    }
}

const AllBooking = async ({email}) => {
    const [bookings, setBookings] = useEffect([])

    useEffect(()=>{
        if(email){
          fetchBooking(email).then(setBookings)  
        }
    }, [email])

  return (
    <div>
        <h1>Here is all your Booking for {email}</h1>
        <ul>
            {bookings.map((booking)=>{
                <li key={booking._id}>{booking.customer_name} - {booking.booking_date}</li>
            })}
        </ul>
    </div>
  )
}

export default AllBooking