import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PlaceCardItem({place}) {
  return (
    <div className='gap-5'>
        <div className='border rounded-xl p-3 mt-2 flex gap-6  hover:scale-105 transition-all cursor-pointer hover:shadow-md'>
            <img src='https://banner2.cleanpng.com/20240210/tsh/transparent-location-icon-cartoon-style-map-with-red-point-visually-1710882005194.webp' className='w-[150px] h-[150px] rounded-lg'/>
            <div>
                <h2 className='font-bold text-lg text-start' >{place.placeName}</h2>
                <p className='text-gray-600 text-left'>{place.placeDetails}</p>
                <h2 className='text-left text-gray-500 mt-2'>🕙 {place.timeToTravel} </h2>
            </div>
            <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName } target='_blank' ><Button><FaMapLocationDot /></Button></Link>
            
        </div>
    </div>
  )
}
PlaceCardItem.propTypes = {
    place: PropTypes.object.isRequired,
};
export default PlaceCardItem