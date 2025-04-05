import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
export const Signup = () => {

    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [email, setEmail] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleClick = () => {
        if(email != "" && password != "" && username != ""){
            registerUserInApi()
            Swal.fire("Felicitaciones! Ahora puedes ampliar la noticia iniciando sesión con tu cuenta.").then((response)=>{
                if(response.isConfirmed){
                    navigate("/")
                }
            });
        }
    }

    const registerUserInApi = async() => {
        const response = await fetch(backendUrl + "signup", {method :"POST",
            body : JSON.stringify({"email" : email, "username": username, "password": password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
     
    }



    return (<>
    <h1>Create your account</h1>
    <form>
        <label>Username</label>
        <input type="text" placeholder="username" onChange={(event)=> setUserName(event.target.value)}/>
        <label>Email</label>
        <input type="text" placeholder="example@example.com" onChange={(event)=> setEmail(event.target.value)}/>
        <label>Password</label>
        <input type="password" placeholder="password" onChange={(event)=> setPassword(event.target.value)}/> 
    </form>
    <button onClick={handleClick}>Register</button>
    </>)
}