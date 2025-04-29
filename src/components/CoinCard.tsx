import formatCurrency from "../helpers/formatCurrency"

interface CoinCardProps {
    name: string
    symbol: string
    priceUsd: number
    changePercent24Hr: number
}

export default function CoinCard({ name, symbol, priceUsd, changePercent24Hr }: CoinCardProps) {

    return (
        <>
            <div className="flex lg:flex-col items-center max-w-11/12 mx-auto gap-6">
                <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} className="rounded-full drop-shadow-sm drop-shadow-black/80 max-w-full h-20" />
                <div className="lg:place-items-center">
                    <p className="text-white drop-shadow-lg drop-shadow-black text-3xl">{name}</p>
                    <p className="text-white drop-shadow-lg drop-shadow-black text-sm">{symbol}</p>
                    <p className={changePercent24Hr >= 0 ?
                        "text-green-500 drop-shadow-lg drop-shadow-black  text-2xl mt-2" :
                        "text-red-400 drop-shadow-lg drop-shadow-black text-2xl mt-2"}>{formatCurrency(Number(priceUsd))} USD</p>
                </div>
            </div >
        </>
    )
}