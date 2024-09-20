import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Hotels({ trip }) {
    return (
        <div >
            <h2 className='font-bold text-xl text-left mt-5'>Hotel Recommendations</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                    <Link key={hotel.id || index} to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+"," +hotel?.hotelAddress} target='_blank' >
                        <div key={hotel.id || index} className='cursor-pointer rounded-xl hover:scale-105 transition-all mt-4'>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/free-hotel-location-icon-download-in-svg-png-gif-file-formats--maps-position-gps-pin-service-pack-holidays-icons-2179577.png?f=webp&w=256" className='rounded-xl' />
                            <div className='my-2 flex flex-col gap-2'>
                                <h2 className='font-medium text-black'>{hotel?.hotelName}</h2>
                                <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                                <h2 className='text-sm text-gray-500'>💰 {hotel?.price} </h2>
                                <h2 className='text-sm text-gray-500'>⭐ {hotel?.rating} </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}
Hotels.propTypes = {
    trip: PropTypes.object.isRequired,
};


export default Hotels