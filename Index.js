import React,{useState} from 'react'
import "../Project/Index.css"
import myimage from "../assests/myimg.png"
// import myuser from  "../assests/user.png"

function Index() {
  let [btnText,setBtnText]=useState('Sign in')

  function handleClick(){
    setBtnText('Sign up!')
     setTimeout(()=>{
      setBtnText('Sign in')
     },2000)
  }
 
  return (
    <div className='logo'>
      <div>
        <nav>
          
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact us  </li>
            <li>Log out</li>
      
          </ul>
        </nav>
      </div>
      <div className='container'>
         <img  src={myimage} alt='' id='img'/>
          <h1 id='heading'>Welcome back!</h1>
        <p id='para'>You Can sign in to Access with your existing Account</p>
            <div className='login'>
             <h1 id='log'>Sign in!</h1>
            </div>
             <div>
              {/* <img src={myuser} alt='' id='user'/> */}
              <input type='text' placeholder='Enter a Username'/>   
             </div>
             <div className='place'>
              <input type='text2'placeholder='Enter a pasword'/>
  
           </div>
              <form>
              <input type='checkbox' id='my-check'/>
              <label id='test'>Remember me</label>
             </form>
             <div>
              <p id='pas'>Forgot password?</p>
             
             </div>
           
              <button  onClick={handleClick}>{btnText}</button>
             <div>
              <h1>
                <span className='black-part'>New here?</span>
                <span className='red-part'>Create an Account</span>
              </h1>
             </div>
            
              
            
           
          </div>
     
    </div>
  )
}

export default Index
