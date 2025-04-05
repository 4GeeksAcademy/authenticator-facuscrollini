import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { privateUser } from "../../api/callToApi/CallToApi";


export const Navbar = () => {
	const [isToken, setIsToken] = useState(false)

	const Logout = () =>{
		sessionStorage.removeItem("token")
		window.location.reload()
	}

	const userLogged = async() =>{
		const verified = await privateUser()
		setIsToken(verified)
	}
	


	useEffect(()=>{
		userLogged()
	})

	useEffect(()=>{
		if(isToken){
			console.log("Esta loggeado")
		} else{
			console.log("No está loggeado")
		}
	},[isToken])

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-decoration-none">DIARIO ELPAIS</span>
				</Link>
				{ isToken ? 
				<div className="ml-auto">
					<Link to="/">
						<button onClick={Logout} className="btn btn-danger">Cerrar sesión</button>
					</Link> 
				</div> : "" }
			</div>
		</nav>
	);
};