import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null);





const Authprovider = ({ children }) => {

const [users, setusers] = useState(null)

    const signIn = (addduser) => {
        
        return (
            fetch('https://atg-task-2-server.vercel.app/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addduser)
        })
            .then(res => res.json())
            .then(data => {
                
             console.log(data.iteam.name)
             setusers(data.iteam.name)


            })
        )
    }






    const authInfo = {
     signIn,
     users
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;