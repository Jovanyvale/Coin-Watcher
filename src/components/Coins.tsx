import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../state/dataSlice"
import type { AppDispatch, RootState } from "../state/store"

export default function Coins() {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    console.log(data.content)

    return (
        <>
            <main className="grid grid-cols-1 lg:grid-cols-3 auto-rows-max">

                {data.content.map(i => (
                    <div key={i.id} className="w-8/12 ">
                        <p>{i.name}</p>
                    </div>
                ))}

            </main>
        </>
    )
}