import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";



function Header() {


  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {

  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (err) => console.log(err)
  })

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
      window.location.reload();
    })
  };




  return (
    <header className="w-full bg-white p-3 shadow-md fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-semibold text-gray-800">Travel Planner</h1>
        </div>
        <div>
          <div>
            {user ?
              <div className='flex items-center gap-3'>
                  <a href='/my-trips'>
                    <Button variant="outline" className="rounded-full"> My Trip</Button>
                  </a>
                <Popover>
                  {/* Trigger only with the image */}
                  <PopoverTrigger asChild>
                    <img
                      src={user?.picture}
                      alt="User Profile"
                      className="h-[40px] w-[40px] rounded-full cursor-pointer"
                    />
                  </PopoverTrigger>

                  {/* Popover content with a "Logout" button */}
                  <PopoverContent className=" rounded-lg bg-transparent">
                    <Button className="w-full bg-transparent text-black" onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      window.location.reload();

                    }
                    }>
                      Logout
                    </Button>
                  </PopoverContent>
                </Popover>



              </div> :
              <Button onClick={() => setOpenDialog(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                Get Started
              </Button>}

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
    </header>
  );
}

export default Header;
