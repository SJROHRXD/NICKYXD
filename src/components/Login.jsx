import React from 'react';
import { useEffect, useState } from 'react';


export default function Login({ authToken, setAuthtoken}) {
    const handleLogin = () => {
        setAuthtoken(true)
    }

    return (
        <div>
            <h1>click button to login</h1>
            <button>Log In Here</button>
        </div>
    );
}
