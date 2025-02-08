import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
 
    const [token , setToken ] = useState(localStorage.getItem('token'));
    const [user , setUser] = useState("");
    const [isLoading ,setIsLoading] = useState(true);
    const [services , setServices] = useState([]);
    const AuthorizationToken = `Bearer ${token}`;


    const API= import.meta.env.VITE_APP_URI_API;


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };


    let isLoggedIn = !!token;

    //tackaling logout functionality
    const LogoutUser  = () => {
        setToken("");
        return localStorage.removeItem('token');
    };


    //JWT Authentication - to get currently loggedIn Data

    const userAuthentication =async() => {
        try {

            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user` , {
                method : "GET",
                headers : {
                    Authorization : AuthorizationToken,
                },
            });

            if(response.ok){
                const data= await response.json();
                console.log(data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
            else{
                console.log("Error Fetching User Data");
                setIsLoading(false);
            }

        } catch (error) {
            console.log("Error Fetching Data");
        }
    }


    //to fetch services data from database
    const getServices = async() => {
        try {
            const response = await fetch(`${API}/api/data/service` , {
                method : "GET",
            });
            if(response.ok){
                const data= await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
            
        } catch (error) {
            console.log("Error Fetching Services");
        }
    };


    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);


    return <AuthContext.Provider value={{LogoutUser, isLoggedIn, storeTokenInLS , user , services , AuthorizationToken, isLoading, API}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}