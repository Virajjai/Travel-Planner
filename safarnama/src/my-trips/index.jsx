import { db } from "@/services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";

function MyTrips() {
    const navigation = useNavigation();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetchUserTrips();
    }, []);

    const getDetails=()=>{
        alert("No More Detail!!!")
    }
    

    const fetchUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            navigation('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        const fetchedTrips = [];
        querySnapshot.forEach((doc) => {
            fetchedTrips.push({ id: doc.id, ...doc.data() });
        });

        setTrips(fetchedTrips); // Fill the trips state with fetchedTrips
        console.log(fetchedTrips)
    };

    return (
        <div className="container mx-auto px-4 sm:px-10 md:px-32 lg:px-56 xl:px-24 mt-10">
            <h1 className="font-bold text-3xl text-left mb-6">My Trips</h1>
            {trips.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
                    {trips.map((trip) => (
                        <div key={trip.id} className="border rounded-lg shadow-lg p-5 bg-white transition-transform transform hover:scale-105">
                            <h2 className="font-bold text-xl">Trip to {trip?.userSelection?.location}</h2>
                            <p className="text-gray-700">Duration: {trip?.userSelection?.noOfDays} days</p>
                            <p className="text-gray-700">Travelers: {trip?.userSelection?.traveler}</p>
                            <p className="text-gray-700">Budget: ${trip?.userSelection?.budget}</p>
                            <Button onClick={getDetails} className="mt-3 bg-blue-500 text-white hover:bg-blue-600">View More Details</Button>
                        </div>
                        
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No trips found. Start planning your adventures!</p>
            )}
        </div>
    );
}

export default MyTrips;
