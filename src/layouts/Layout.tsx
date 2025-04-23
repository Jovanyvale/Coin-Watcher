import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Search from "../components/Search"

export default function Layout() {

    return (
        <>
            <Header />
            <Search />
            <Outlet />
        </>
    )
}