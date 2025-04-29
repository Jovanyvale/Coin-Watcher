import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState, useMemo } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"
import CoinCard from "./CoinCard"
import CoinModal from "./CoinModal"
import { useLocation } from "react-router-dom"
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
interface updated {
    id: string
    priceUsd: string
    changePercent24Hr: string
}

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)
    const filter = useSelector((state: RootState) => state.filter)
    const favorites = useSelector((state: RootState) => state.favorites)
    const location = useLocation()
    const isFavoritesPage = useMemo(() => location.pathname === '/favorites', [location.pathname])

    const filteredCoins = data.content.filter((coin) => (
        coin.name.toLowerCase().includes(filter.searchInput.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.searchInput.toLocaleLowerCase())
    )).sort((a, b) => {
        switch (filter.sortInput) {
            case "sortName":
                return a.name.localeCompare(b.name);
            case "sortPrice":
                return Number(b.priceUsd) - Number(a.priceUsd);
            case "sort24hHL":
                return Number(b.changePercent24Hr) - Number(a.changePercent24Hr);
            case "sort24hLH":
                return Number(a.changePercent24Hr) - Number(b.changePercent24Hr);
        }
    }
    )

    //Update prices
    useEffect(() => {
        dispatch(fetchData())

        const updatePrices = async () => {
            const res = await fetch('https://rest.coincap.io/v3/assets?limit=42&apiKey=34f98b74b718308a1843a3501098cc766dc404c4d49b3e79d995eeb246a539e1')
            const json = await res.json()
            const updated = await json.data

            dispatch({
                type: 'data/updatePrices',
                payload: updated.map(({ id, priceUsd, changePercent24Hr }: updated) => ({
                    id,
                    priceUsd,
                    changePercent24Hr
                }))
            })
        }

        const interval = setInterval(updatePrices, 10000)
        return () => clearInterval(interval)
    }, [dispatch])

    const [selectedCoin, setSelectedCoin] = useState<selectedCoin | null>(null)

    //Lock content when modal is active
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

    return (
        <>
            <main className="min-h-screen mt-10 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-max place-items-center gap-8">
                {data.loading ? (<img className="flex justify-center items-center md:col-start-2 max-w-2/5" src="public/tube-spinner.svg" />) : (
                    (filteredCoins
                        .filter(coin => !isFavoritesPage || favorites.includes(coin.id))
                        .map(i => (
                            <div
                                key={i.id}
                                onClick={() => setSelectedCoin(i)}
                                className={
                                    i.changePercent24Hr >= 0
                                        ? "lg:h-60 h-40 w-full greenCard place-content-center"
                                        : "lg:h-60 h-40 w-full redCard place-content-center"
                                }
                            >
                                <CoinCard name={i.name} symbol={i.symbol} priceUsd={i.priceUsd} changePercent24Hr={i.changePercent24Hr} />
                            </div>
                        ))
                    )
                )}

                {selectedCoin && (
                    <div className="fixed inset-0 bg-black/50 z-2">
                        <CoinModal
                            id={selectedCoin.id}
                            name={selectedCoin.name}
                            symbol={selectedCoin.symbol}
                            image={`https://assets.coincap.io/assets/icons/${selectedCoin.symbol.toLowerCase()}@2x.png`}
                            supply={selectedCoin.supply}
                            marketCap={selectedCoin.marketCapUsd}
                            vwap24Hr={selectedCoin.vwap24Hr}
                            changePercent24Hr={selectedCoin.changePercent24Hr}
                            priceUsd={selectedCoin.priceUsd}
                            onClose={() => setSelectedCoin(null)}
                        />
                    </div>
                )}
            </main >


        </>
    )
}