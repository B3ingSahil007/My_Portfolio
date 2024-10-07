import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [services, setServices] = useState("")
    const [projects, setProjects] = useState("")
    const [experience, setExperience] = useState("")

    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken)
        // localStorage.getItem("token")
        return localStorage.setItem('token', serverToken)
    }

    let isLoggedIn = !!token
    // console.log("Token", token);
    // console.log("isLoggedIn", isLoggedIn);

    const LogoutUser = () => {
        // console.log("Logging Out Successfull",);
        setToken("")
        return localStorage.removeItem('token')
    }

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (response.ok) {
                const data = await response.json()
                // console.log("User Data", data.userData);
                setUser(data.userData)
            } else {
                console.log("Error Fetching User Data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/service', {
                method: 'GET',
            })

            if (response.ok) {
                const servicesData = await response.json()
                // console.log(servicesData.msg);
                setServices(servicesData.msg)
            } else {
                console.log("Error Fetching Services Data");
            }
        } catch (error) {
            console.log(`Services Frontend Error: ${error}`);
        }
    }

    const getProjects = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/projects', {
                method: 'GET',
            })

            if (response.ok) {
                const projectData = await response.json()
                // console.log(projectData.msg);
                setProjects(projectData.msg)
            } else {
                console.log("Error Fetching Projects Data");
            }
        } catch (error) {
            console.log(`Projects Frontend Error: ${error}`);
        }
    }

    const getExperience = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/experience', {
                method: 'GET',
            })

            if (response.ok) {
                const experienceData = await response.json()
                // console.log(projectData.msg);
                setExperience(experienceData.msg)
            } else {
                console.log("Error Fetching Experience Data");
            }
        } catch (error) {
            console.log(`Experience Frontend Error: ${error}`);
        }
    }

    useEffect(() => {
        getServices()
        getProjects()
        getExperience()
        userAuthentication()
    }, [])


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user, services, projects, experience }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth Used In AuthProvider Is Not Supported, Outside Of The AuthProvider");
    }
    return authContextValue;
}