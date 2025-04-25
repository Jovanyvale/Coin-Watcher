import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"
import fortmatCurrency from "../helpers/formatCurrency"

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    console.log(data.content)


    return (
        <>
            <main className="mt-10 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-max place-items-center gap-8">

                {data.content.map(i => (
                    <div key={i.id} className="h-40 w-full greenCard place-content-center">
                        <div className="flex items-center max-w-11/12">
                            <img src={`https://assets.coincap.io/assets/icons/${i.symbol.toLowerCase()}@2x.png`} className="rounded-full max-w-full" />

                            <div>
                                <p>{i.name}</p>
                                <p>{fortmatCurrency(Number(i.priceUsd))} USD</p>
                            </div>
                        </div>
                    </div>
                ))}

            </main>
        </>
    )
}