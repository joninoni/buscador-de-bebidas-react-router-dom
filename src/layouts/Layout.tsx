import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"

const Layout = () => {
	return (
		<div>
			<Header/>

			<main className="container mx-auto py-16">
				<Outlet/>
			</main>

			<Modal/>
		</div>
  	)
}

export default Layout