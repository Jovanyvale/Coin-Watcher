import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"
import fortmatCurrency from "../helpers/formatCurrency"
import store from "../state/store"
import CoinCard from "./CoinCard"

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)
    const status = useSelector((state: RootState) => state)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    console.log(data.content)

    console.log(status)
    console.log(status)
    console.log(status)


    return (
        <>
            <main className="min-h-screen mt-10 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-max place-items-center gap-8">
                {data.loading ? (<img className="flex justify-center items-center md:col-start-2 max-w-2/5" src="public/tube-spinner.svg" />) : (
                    (data.content.map(i => (
                        <div key={i.id} className={i.changePercent24Hr >= 0 ? "h-60 w-full greenCard place-content-center" : "h-60 w-full redCard place-content-center"}>
                            <CoinCard name={i.name} symbol={i.symbol} priceUsd={i.priceUsd} />
                        </div>
                    ))
                    )
                )}
            </main >
        </>
    )
}