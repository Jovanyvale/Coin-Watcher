import { useMemo } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
export default function Header() {

    const location = useLocation()

    const isHome = useMemo(() => location.pathname === '/', [location.pathname])

    return (<>
        <div className="bg-black flex lg:flex-row flex-col place-content-between py-8 px-28 items-center">
            <div className="flex flex-row gap-8">
                <img className="max-w-24 drop-shadow-md" src="buy-crypto-svgrepo-com.svg" alt="Logo" />
                <p className="text-4xl text-white self-center drop-shadow-md">Coin Watcher</p>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-26 mt-10 lg:mt-0">
                <NavLink className={({ isActive }) => isActive ? "text-2xl text-yellow-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" : "text-2xl text-white"}
                    to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-2xl text-yellow-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" : "text-2xl text-white"}
                    to="/favorites">Favorites</NavLink>
            </div>
        </div>
    </>
    )
}