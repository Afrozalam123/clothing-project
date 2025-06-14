import React from 'react'
import "../Project/Index.css"
import myimage from "../assests/myimg.png"
import myuser from  "../assests/user.png"
function Index() {
 
  return (
    <div className='logo'>
      <div>
        <nav>
          
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact us  </li>
      
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
             <div className='placeholder'>
              <img src={myuser} alt='' id='user'/>
              <input type='text' placeholder='Enter a Username or E-mail'/>
             </div>
             <div className='place'>
              <input type='text2'placeholder='Enter a pasword'/>
              <input type='checkbox' placeholder='Remewmber me'/>
             </div>
          
            
            
              
            
           
          </div>
     
    </div>
  )
}

export default Index
