import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/services/GobalApi';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { IoSend } from "react-icons/io5";
function InfoSection({trip}) {

  useEffect(()=>{
    trip && GetPlacePhoto();
  },[trip])

  const GetPlacePhoto= async()=>{

    const data={
      textQuery:trip?.userSelection?.location
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      console.llog(resp.data)
    })
    console.log(result)

  }

  return (
    <div>
        
        <img src='https://t4.ftcdn.net/jpg/02/41/95/15/360_F_241951583_x3Pn4HbvGKfbdvVd43jKluTYB9IaXz1K.jpg' className="h-[340px] w-full object-cover rounded-xl " />
    

        <div className='flex justify-between items-center'>
            <div className='my-5  flex flex-col gap-2'>
                <h2 className='font-bold text-2xl text-left'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-4' >
                    <h2 className='p-1 px-3 bg-gray-200 text-left rounded-3xl md:text-md' >📅 {trip.userSelection?.noOfDays} Days</h2>
                    <h2 className='p-1 px-3 bg-gray-200 text-left rounded-3xl md:text-md' >💰 {trip.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 text-left rounded-3xl md:text-md' >🥂 No. Of Travelers: {trip.userSelection?.travelers} </h2>
                </div>
            </div>
            <Button><IoSend /></Button>
        </div>


    </div>
  )
}

InfoSection.propTypes = {
    trip: PropTypes.object.isRequired,
  };

export default InfoSection