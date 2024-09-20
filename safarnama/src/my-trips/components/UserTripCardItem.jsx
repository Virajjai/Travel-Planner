import PropTypes from 'prop-types';


function UserTripCardItem() {
  return (
    <div>
        <img src='/placeholder.jpg'/>
        
    </div>
  )
}
UserTripCardItem.propTypes = {
    trip: PropTypes.object.isRequired,
  };

export default UserTripCardItem