import { render } from '@testing-library/react';
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch,useSelector } from 'react-redux';
import {
     selectSignedIn, setSignedIn, setUserData 
    } from '../features/useSlice';

import "../styling/home.css";

import "../styling/navbar.css";

const Homepage = () => {

    const isSignedIn = useSelector(selectSignedIn)

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj));
    }
    
    return (
        <div className="home__page" style={{display :isSignedIn ? "none" : ""}}>
            {!isSignedIn ? (
                <div className="login__message">
                    <h2>📘</h2>
                    <h1>A Reader's Favorite Place</h1>
                    <p>
                        We provide high quality online resource for reading blogs. Just sign
                        up and start reading some quality blogs.
                    </p>
                    <GoogleLogin 
                        clientId="800060513092-spdu0tgrs9kr7lci8u99rm8riuh614h0.apps.googleusercontent.com"
                        render = {(renderProps) =>(
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                />
            </div> 
            ) : ( 
                ""
            )}
        </div>
    )
}

export default Homepage;
