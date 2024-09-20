
import { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/services/AImodel';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { setDoc, doc } from "firebase/firestore";
import { db } from '@/services/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';






function CreateTrip() {
    const [place, setPlace] = useState();
    const [manualLocation, setManualLocation] = useState('');
    const [formData, setFormData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (err) => console.log(err)
    })

    const OnGenerateTrip = async () => {

        const user = localStorage.getItem('user');

        if (!user) {
            setOpenDialog(true)
            console.log(openDialog)
            return;
        }

        if (formData?.noOfDays > 15) {
            toast('Only 15 days are allowed')
        }
        if (!formData?.location || !formData?.budget || !formData.traveler) {
            toast("Please fill all the fields")
            return;
        }

        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location?.label || formData?.location)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{taverlers}', formData?.traveler)
            .replace('{budget}', formData?.budget)
            .replace('{totalDays}', formData?.noOfDays)




        try {
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            
            SaveAiTrip(result?.response?.text())
            setLoading(false);
        } catch (error) {
            console.error('Error in API call:', error);
        }

    }

    const SaveAiTrip = async (TripData) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString()
        await setDoc(doc(db, "AITrips", docId), {
            userSelection: formData,
            tripData: JSON.parse(TripData),
            userEmail: user?.email,
            id: docId
        });
        setLoading(false);
        navigate('/view-trip/'+docId)

    }
    const closeDialog = () => {
        setOpenDialog(false);
      };

    const GetUserProfile = (tokenInfo) => {
        return axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'application/json'
            }
        }).then((resp) => {
            console.log(resp);
            localStorage.setItem('user', JSON.stringify(resp.data));
            setOpenDialog(false);
            OnGenerateTrip()
        })
    };

    return (
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-24 px-5 mt-10 mb-10">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">Tell us about your preferences 🏕️🌴</h2>
            <p className="text-lg text-gray-600 mb-12">
                Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
            </p>

            <div className="space-y-12">
                {/* Destination Input */}
                <div className="w-full">
                    <h2 className="text-xl mb-3 font-medium text-gray-800">What is your destination of choice?</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{
                            place,
                            onChange: (v) => {
                                setPlace(v);
                                handleInputChange('location', v);
                            },
                        }}
                        className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                    />

                    {/* Manual Input Fallback */}
                    <Input
                        placeholder="Or type the destination manually"
                        value={manualLocation}
                        onChange={(e) => {
                            setManualLocation(e.target.value);
                            handleInputChange('location', e.target.value);
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                    />

                </div>


                {/* Trip Duration Input */}
                <div>
                    <h2 className="text-xl mb-3 font-medium text-gray-800">How many days are you planning your trip?</h2>
                    <Input
                        placeholder="e.g. 3 days"
                        type="number"
                        onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Budget Selection */}
                <div>
                    <h2 className="text-xl mb-3 font-medium text-gray-800">What is your budget?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {SelectBudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleInputChange('budget', item.title)}
                                className={`p-5 border cursor-pointer rounded-lg transition-shadow hover:shadow-lg 
            ${formData?.budget === item.title && 'shadow-lg border-blue-500'}`}
                            >
                                <h2 className="text-4xl mb-3">{item.icon}</h2>
                                <h2 className="font-bold text-lg text-gray-800">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Travelers Selection */}
                <div>
                    <h2 className="text-xl mb-3 font-medium text-gray-800">Who do you plan on traveling with?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {SelectTravelesList.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleInputChange('traveler', item.people)}
                                className={`p-5 border cursor-pointer rounded-lg transition-shadow hover:shadow-lg
            ${formData?.traveler === item.people && 'shadow-lg border-blue-500'}`}
                            >
                                <h2 className="text-4xl mb-3">{item.icon}</h2>
                                <h2 className="font-bold text-lg text-gray-800">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Generate Trip Button */}
                <div className="my-10 flex justify-end">
                    <Button
                        disabled={loading}
                        onClick={OnGenerateTrip} className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-md shadow-md hover:bg-blue-600 transition-all">
                        {loading ?
                            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'}
                    </Button>
                </div>
                <Dialog open={openDialog}>
                    <DialogContent>
                        <DialogHeader>
                        <span
                  onClick={closeDialog}
                  className="absolute top-2 right-4 cursor-pointer text-3xl opacity-50 hover:opacity-100 transition-opacity"
                >
                  &times;
                </span>
                            <DialogDescription>
                                <img src="/logo.svg" />
                                <h2 className='font-bold text-lg mt-7 text-black'>Sign In With Google</h2>
                                <p>Sign In to the app with google authentication securely</p>
                                <Button
                                    onClick={login}
                                    className='w-full mt-5 flex gap-4 items-center'>

                                    <FcGoogle className='h-7 w-7' />
                                    Sign In With Google

                                </Button>


                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>




        </div>



    )
}

export default CreateTrip