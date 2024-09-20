import PropTypes from 'prop-types';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className='font-extrabold text-lg text-left'>Places To Visit </h2><br/>
            <div>
                {trip.tripData?.itinerary.map((item, index) => (
                    <div key={item.id || index}>
                        <h2 className='font-medium text-lg text-left'>Day {item.day} </h2>
                        <h2 className='font-medium text-lg text-left text-gray-500'>Best time to visit : {item.bestTime}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item.plan.map((place, index) => (
                                <div key={index}>
                                    <div className='my-3'>
                                        <PlaceCardItem place={place} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
PlacesToVisit.propTypes = {
    trip: PropTypes.object.isRequired,
};

export default PlacesToVisit