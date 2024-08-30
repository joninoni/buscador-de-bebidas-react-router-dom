import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
	return (
		<div>
			<Header/>

			<main className="container mx-auto py-16">
				<Outlet/>
			</main>
		</div>
  	)
}

export default Layout