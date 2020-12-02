import React from 'react';
import './Register.css'
import Dashboard from './Dashboard'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <>

<div class="container">
  <div class='col-12'>
    <h3 style={{textAlign:'center', color:'#006600', position:'static'}} >Rwanda Animal Resource Improvement Cooperative</h3>

  </div>
        <div class='row'  >
          <div class="col-12" style={{backgroundColor:'white', borderRadius:'15px', position:'static'}}>
          <h5 style={{textAlign:'center'}}>Welcome to RARICO'S potal</h5>
          </div>
        </div>
  <form action="/action_page.php">
    <div class="row" style={{position:'static'}} >
      <div class="col">
        <a href="https://www.facebook.com/" class="fb btn"  style={{marginLeft:'10px'}}>
          <i class="fa fa-facebook fa-fw"></i>
           Login with Facebook
         </a>
        <a href="https://twitter.com/" class="twitter btn"  style={{marginLeft:'10px'}}>
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="https://gmail.com/" class="google btn"  style={{marginLeft:'10px'}}><i class="fa fa-google fa-fw">
          </i> Login with Google
        </a>

        <a href="https://instagram.com/" class="instagram btn"  style={{marginLeft:'10px'}}><i class="fa fa-instagram fa-fw">
          </i> Login with Instagram
          
        </a>
      </div>

      <div class="col">
      
        
      <div className='form-wrapper'>

<form onSubmit={this.handleSubmit} noValidate>
<div className='email'>
<label htmlFor="email">Email</label>
<input type='email' name='email' onChange={this.handleChange} noValidate />
{errors.email.length > 0 && 
<span className='error'>{errors.email}</span>}
</div>
<div className='password'>
<label htmlFor="password">Password</label>
<input type='password' name='password' onChange={this.handleChange} noValidate />
{errors.password.length > 0 && 
<span className='error'>{errors.password}</span>}
</div>
<div className='submit'>

{/* <a href="/Dashboard" class="btn btn-primary"><i >
          </i> Login
        </a> */}
<button class='btn btn-primary' style={{background:'green'}} onClick={Dashboard}>Login</button>


</div>
</form>
</div>



      </div>
      
    </div>
  </form>
</div>

<div class="container" style={{background:'green'}}>
  <div class="row">
    <div class="col">
      <a href="/Signup" style={{color:'white'}}class="btn">Sign up</a>
    </div>
    <div class="col">
      <a href="#" style={{color:'white'}} class="btn">Forgot password?</a>
    </div>
  </div>
</div>

</>
      
    );
  }
}