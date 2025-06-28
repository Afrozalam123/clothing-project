import React from 'react'
import "../Project/Index.css"
import myimage from "../assests/myimg.png"
import { useForm } from "react-hook-form"
// import myuser from  "../assests/user.png"

function Index() {
  const {
      register,
      handleSubmit,
      // watch,
      formState: { errors,isSubmitting },
    } = useForm()
  

     async function onSubmit(data){
      // Now calling Api data
       await new Promise((resolve,) => {
        setTimeout(resolve,5000) 
       })

  console.log("Submitting my form",data)
 }

  
  
  // useEffect(() => {
  // alert("welcome to my signing page")
  // }, [btnText])
  

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
             <form onSubmit={handleSubmit(onSubmit)}>  
              <div className='form-control'>
              <input  {...register("UserName", 

                { required: true,
                 
                  minLength:{value:4,message:'min at least 4 character' },
                 maxLength: {value:15, message:"UserName must  20 characters"} })}  placeholder='Entera a UserName' type='text'/>
                 {errors.UserName && <p id='paragraph1'>{errors.UserName.message}</p>}
                
                </div>
               <div>                
              <input {...register("password", 

                { required: true,
                minLength:{value:8,message:"min at least 8 character"},
               maxLength:{value:10,message:"password must 15 characters"}})}placeholder='Enter a password' 
              type='text2'/>
             {errors.password && <p id='paragraph'>{errors.password.message}</p>}
             
             </div>
              <input type='Submit'  disabled={isSubmitting} 
              value={isSubmitting ? "Submitting" : "Submit"}

              />   
             </form>
           </div>
           
              <form>
              <input type='checkbox' id='my-check'/>
              <label id='test'>Remember me</label>
             </form>
             <div>
              <p id='pas'>Forgot password?</p>
             
             </div>
           
           
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
