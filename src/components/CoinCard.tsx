import formatCurrency from "../helpers/formatCurrency"

interface CoinCardProps {
    name: string
    symbol: string
    priceUsd: number
}

export default function CoinCard({ name, symbol, priceUsd }: CoinCardProps) {

    return (
        <>
            <div className="flex lg:flex-col items-center max-w-11/12 mx-auto gap-6">
                <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} className="rounded-full max-w-full h-20" />

                <div className="lg:place-items-center">
                    <p className="text-white text-3xl">{name}</p>
                    <p className="text-white text-sm">{symbol}</p>
                    <p className="text-white text-2xl mt-2">{formatCurrency(Number(priceUsd))} USD</p>
                </div>
            </div>
        </>
    )
}