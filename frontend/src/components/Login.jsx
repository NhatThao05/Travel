import React from "react"
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import bgVideo from '../assets/bgVideo.mp4';
import Logo from '../assets/Logo.png'
import { client } from '../client';


export default function Login() {
 const navigate = useNavigate();

 const responseGoogle = (response) => {
  console.log(">>>", response)
  localStorage.setItem('user', JSON.stringify(response.profileObject));
    const { name, googleId, imageUrl } = response.profileObject;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  const responseGoogles = (response) => {
    console.log(response);
  }
 
 return(
  <div className="flex justify-start items-center flex-col h-screen">
    <div className="relative w-full h-full">
     <video src={bgVideo} type="video/mp4" loop controls={false} muted autoPlay className="w-full h-full object-cover"/>
     <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
       <div className="p-5">
        <img src={Logo} width="100px" alt="logo"/>
       </div>
       <div className="shadow-2xl">
       <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
          onSuccess={responseGoogles}
          onFailure={responseGoogles}
          cookiePolicy="single_host_origin"
        />
       </div>
     </div>
    </div>
  </div>
 )
}


