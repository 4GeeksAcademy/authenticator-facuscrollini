import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const Login = () => {
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
const navigate = useNavigate()

 const SendInfoToApi = async() => {
   const backendUrl = import.meta.env.VITE_BACKEND_URL
    const response = await fetch(backendUrl + 'login', {method : "POST",
        body : JSON.stringify({"email" : email, "password": password}),
        headers : {"Content-Type": "application/json"}
    })
    const data = await response.json()
    if (data.token){
       sessionStorage.setItem("token", data.token)
       window.location.reload()
    }
   
 }

 useEffect(()=>{
   const token = sessionStorage.getItem('token')
   if(token){
      navigate("/private")
   }
 },[])
 

    return ( <>
    <h1>Access to your account</h1>
    <form>
    <label>Email</label>
    <input type="email" placeholder="example@example.com" onChange={(event)=>setEmail(event.target.value)}/>
    <label>Password</label>
    <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
    </form>
    <button onClick={SendInfoToApi}>Login</button>
    </>)
}