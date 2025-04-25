import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./views/Home"
import Layout from "./layouts/Layout"
import Favorites from "./views/Favorites"

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/" element={<Header />} index />
                </Route>
            </Routes >
        </BrowserRouter>
    )
}