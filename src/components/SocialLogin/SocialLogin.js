import React from 'react';
import './SocialLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>
            </div>
            <div className='d-flex'>
                <button onClick={handleSignInWithGoogle} className='btn btn-danger text-light mx-auto'>Continue with Google <FontAwesomeIcon className='logo' icon={faGoogle}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default SocialLogin;