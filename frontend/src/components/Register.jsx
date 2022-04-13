import React from 'react';
import axios from 'axios';
import { Navigate, useHistory, useNavigate } from "react-router-dom";

export default function Login() {
    
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confPassword, setConfPassword] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                username: username,
                email: email,
                password: password,
                confPassword: confPassword,
            });
            console.log(email, password)
            history("/home");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return(
        <div className="main-padding">
        <section className="vh-80">
            <div class="container-fluid">
                <div className="row">
                <div className="col-sm-6 text-black" style={{paddingLeft:'0'}}>

                    <div className="d-flex align-items-center h-custom-2 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                    <form style={{width: '23rem'}} onSubmit={Auth}>

                        <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Register</h3>

                        <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label class="form-label" for="username">Username</label>
                        </div>
                        
                        <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label class="form-label" for="email">Email address</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="password" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)}  />
                        <label class="form-label" for="password">Password</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="confPassword" class="form-control form-control-lg" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}  />
                        <label class="form-label" for="confPassword">Confirm Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                        <button class="btn btn-info btn-lg btn-block" type="submit">Register</button>
                        </div>
                        <p>{msg}</p>

                        <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                        <p>Already have an account? <a href="./login" class="link-info">Log in here</a></p>

                    </form>

                    </div>

                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    {/*
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                    alt="oops" class="w-100" style={{height:'100vh', overflow: 'hidden!important', objectFit: 'cover', objectPosition: 'left'}}/>
                    */}
                </div>
                </div>
            </div>
        </section>
        </div>
    );
}