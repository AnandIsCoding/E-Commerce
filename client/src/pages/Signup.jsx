import React, { useState } from 'react'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowpassword] = useState(false);
  const [isSignupform, setissignupform] = useState(true);  

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  // function for email validation check using regex pattern
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  // login form controller with basic validation from frontend, when own backend will be integrated validation will also be performed there
  const handleLoginform = (event) => {
    event.preventDefault();
     
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email ");
      return;
    }
    if(password.length < 8){
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    // Proceed with login logic
    toast.success("Login successful!");
    navigate('/')
  };
  const handleSignupform = (event) => {
    event.preventDefault();

  if (!firstName.trim()) {
    toast.error("First name is required.");
    return;
  }
  if (!lastName.trim()) {
    toast.error("Last name is required.");
    return;
  }
  if (!email.trim() || !validateEmail(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
  if (password.trim().length < 8) {
    toast.error("Password must be at least 8 characters long.");
    return;
  }
  if (age < 18) {
    toast.error("Users must be at least 18 to signup");
    return;
  }
  if (!["male", "female", "other"].includes(gender.toLowerCase())) {
    toast.error("Please enter a valid gender. (male, female, other)");
    return;
  }

  // all okk than successfull
  toast.success("Signup successful!")
  navigate('/')

    
  };

  return (
    <div className='w-full h-full flex md:fixed'>

      <div className='hidden md:flex md:w-[60%] lg:w-[70%] h-screen h bg-violet-500'>
      <video
          src="/modelvideo.mp4" 
          autoPlay
          loop
          muted
          playsInline 
          className="w-full h-full object-cover md:rounded-r-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>



      {/* form and all */}
      <div className='w-[100%] md:w-[40%] lg:w-[30%] px-5 py-3 md:p-2'>
        <h1 className=" text-center text-2xl mb-0 font-bold text-black">
          {" "}
          {isSignupform ? "Signup" : "Login"}{" "}
        </h1>
        <div className="w-[12vw] h-[12vw] md:w-[2.5vw] md:h-[2.5vw] bg-violet-100 ml-auto mr-auto rounded-full ">
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
            alt="user_image"
            className="w-full h-full object-cover"
          />
        </div>


        <form>
          {isSignupform && (
            <div>
              <label className="md:text-sm">First Name</label>
              <div className="flex gap-4 mb-1">
                <input
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(event) => setFirstname(event.target.value)}
                  className="bg-[#eeeeee] w-full rounded-lg px-4  py-3 border  text-lg md:text-sm  placeholder:text-base"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              <label className="md:text-sm">Last Name</label>
              <div className="flex gap-4 mb-1">
                <input
                  id="lastName"
                  required
                  value={lastName}
                  onChange={(event) => setLastname(event.target.value)}
                  className="bg-[#eeeeee] w-full rounded-lg px-4 py-3 border  text-lg md:text-sm placeholder:text-base"
                  type="text"
                  placeholder="Your last name"
                />
              </div>

              <label className="md:text-sm">Gender</label>
              <div className="flex gap-4 mb-1">
                <input
                  id="gender"
                  required
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className="bg-[#eeeeee] w-full rounded-lg px-4 py-3 border  text-lg md:text-sm  placeholder:text-base"
                  type="text"
                  placeholder="male female other"
                />
              </div>
            </div>
          )}
          <h3 className="text-lg md:text-sm font-medium mb-1">What's your email</h3>
          <input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="bg-[#eeeeee] mb-4 rounded-lg px-4 py-3 border w-full text-lg md:text-sm placeholder:text-base"
            type="email"
            placeholder="email@gmail.com"
          />

          <h3 className="text-lg md:text-sm font-medium">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-0 rounded-lg px-4 py-3 border w-full text-lg md:text-sm placeholder:text-base"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            type={showPassword ? "text" : "password"}
            autoComplete="true"
            placeholder="password"
          />
          <p
            className="text-end text-sm font-semibold cursor-pointer"
            onClick={() => setShowpassword(!showPassword)}
          >
            {showPassword ? "Hide password" : "show password"}
          </p>

          {isSignupform && (
            <div>
              <h6 className="text-lg font-medium mt-[-10px] md:text-sm">Enter Age</h6>
              <input
                className="bg-[#eeeeee] mb-0 rounded-lg px-4 py-3 border w-full text-lg placeholder:text-base"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
                type="number"
                autoComplete="true"
                placeholder="your age"
              />
            </div>
          )}
          
          <button
            onClick={(event) => {
              isSignupform ? handleSignupform(event) : handleLoginform(event);
            }}
            className="bg-[#111] text-white font-semibold  rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mt-3 md:mt-5"
          >
            {isSignupform ? "Create Account" : "Login and continue"}
          </button>
        </form>

        <h2 className="text-center">
          {isSignupform
            ? "Already have a account ?"
            : "Don't have an account ?"}
          <span
            onClick={() => setissignupform((prev) => !prev)}
            className="text-blue-600 cursor-pointer mx-2"
          >
            {!isSignupform ? "Signup here" : "Login here"}
          </span>
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
     
      {/* back button in desktop using bom functionality or method histore object's .go method */}
      <button onClick={()=> window.history.go(-1)} className="absolute top-2 right-2 bg-violet-300 px-8 py-2 rounded-md hidden md:block">Back</button>
      
      
    </div>
  )
}

export default Signup
