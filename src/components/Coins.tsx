import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"
import CoinCard from "./CoinCard"
import CoinModal from "./CoinModal"

interface selectedCoin {
    changePercent24Hr: string
    explorer: string
    id: string
    marketCapUsd: string
    maxSupply: string | null
    name: string
    priceUsd: string
    rank: string
    supply: string
    symbol: string
    volumeUsd24Hr: string
    vwap24Hr: string | null
    onClose: () => null
}

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)
    const status = useSelector((state: RootState) => state)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const [selectedCoin, setSelectedCoin] = useState<selectedCoin | null>(null)
    const [selectedFilter, setSelectedFilter] = useState("")

    useEffect(() => {
        if (selectedCoin) {
            document.body.classList.add("active-modal")
            document.body.style.userSelect = "none"
        } else {
            document.body.classList.remove("active-modal")
            document.body.style.userSelect = ""
        }

        return () => {
            document.body.classList.remove("active-modal")
            document.body.style.userSelect = ""
        }
    }, [selectedCoin])

    console.log(data.content)

    console.log(status)

    return (
        <>
            <main className="min-h-screen mt-10 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-max place-items-center gap-8">
                {data.loading ? (<img className="flex justify-center items-center md:col-start-2 max-w-2/5" src="public/tube-spinner.svg" />) : (
                    (data.content.map(i => (
                        <div key={i.id} onClick={() => setSelectedCoin(i)} className={i.changePercent24Hr >= 0 ? "h-60 w-full greenCard place-content-center" : "h-60 w-full redCard place-content-center"}>
                            <CoinCard name={i.name} symbol={i.symbol} priceUsd={i.priceUsd} />
                        </div>
                    ))
                    )
                )}

                {selectedCoin && (
                    <div className="fixed inset-0 bg-black/50 z-2">
                        <CoinModal
                            name={selectedCoin.name}
                            symbol={selectedCoin.symbol}
                            image={`https://assets.coincap.io/assets/icons/${selectedCoin.symbol.toLowerCase()}@2x.png`}
                            supply={selectedCoin.supply}
                            marketCap={selectedCoin.marketCapUsd}
                            vwap24Hr={selectedCoin.vwap24Hr}
                            changePercent24Hr={selectedCoin.changePercent24Hr}
                            priceUsd={selectedCoin.priceUsd}
                            onClose={() => setSelectedCoin(null)}
                        /></div>
                )}
            </main >


        </>
    )
}