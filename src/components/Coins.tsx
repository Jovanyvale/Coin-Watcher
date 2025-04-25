import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"
import fortmatCurrency from "../helpers/formatCurrency"
import store from "../state/store"

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    console.log(data.content)


    return (
        <>
            <main className="min-h-screen mt-10 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-max place-items-center gap-8">

                {data.content.map(i => (
                    <div key={i.id} className="h-40 w-full greenCard place-content-center">
                        <div className="flex items-center max-w-11/12 mx-auto gap-6">
                            <img src={`https://assets.coincap.io/assets/icons/${i.symbol.toLowerCase()}@2x.png`} className="rounded-full max-w-full" />

                            <div>
                                <p className="text-white text-2xl">{i.name}</p>
                                <p className="text-white text-sm">{i.symbol}</p>
                                <p className="text-white text-xl mt-2">{fortmatCurrency(Number(i.priceUsd))} USD</p>
                            </div>
                        </div>
                    </div>
                ))}

            </main>
        </>
    )
}