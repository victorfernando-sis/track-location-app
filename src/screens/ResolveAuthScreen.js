import React, { useContext, useEffect } from 'react';
import { Context } from '../context/AuthContext';


const ResolveAuthScreen = () => {
    const { automaticSignin } = useContext(Context);

    useEffect(() => {
        automaticSignin();
    }, []);

    return null;
};

export default ResolveAuthScreen;