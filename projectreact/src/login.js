import React from "react";
import image from './login and signup img.jpg';
import {Link} from "react-router-dom";
import './login.css'

class Login extends React.Component{

   render(){
    const mystyle={
        backgroundImage:`url('${image}')`,
        height:'100vh',
        width:'100vh',
        marginTop:'0px',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'left',
    };
   
        return(
            <div style={mystyle}>

            <form>
            <div className='back'>
    
                <div>
                <h3>LOGIN</h3>
                </div>
                
                <input className='input-field' type="email" placeholder="Enter Email" required />

                <input className='input-field1' type="password" placeholder="Enter Password" minLength={8} required />

                <div>   
                <Link to="/home"><input className='btn3' type='submit' value='Proceed'></input></Link>
                </div>

                <div class="fp">
                    <Link to="/forgotpassword"><a href="##">Forgot Password</a></Link>
                </div>
                
                <div>
                    <h4>Don't have an account?</h4>
                </div>
                
                <div>
                <Link to="/signup"><input className='btn4' type='submit' value='Sign Up'></input></Link>
                </div>

            </div>
            </form>
            </div>
            
           
        );
    }
}

export default Login;