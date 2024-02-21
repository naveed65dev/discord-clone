import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {signIn} from './firebase'; 
 
const Login = () => {
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="discord logo" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;
