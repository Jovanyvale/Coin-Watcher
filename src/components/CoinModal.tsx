import formatCurrency from "../helpers/formatCurrency"

interface CoinModalProps {
    name: string
    symbol: string
    image: string
    supply: string
    marketCap: string
    vwap24Hr: string | null
    changePercent24Hr: string
    priceUsd: string
    onClose: () => void
}

export default function CoinModal({ name, symbol, image, supply, marketCap, vwap24Hr, changePercent24Hr, priceUsd, onClose }: CoinModalProps) {

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-7 lg:h-10/12 h-9/12 lg:w-10/12 w-11/12 place-self-center bg-gray-900/85 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 fixed inset-0">
                <div className="flex col-span-9 col-start-2 w-5/12 place-items-center lg:gap-5 gap-2 ">
                    <img src={image} alt="Coin image" className="max-w-md" />
                    <p className="text-white text-xl md:text-4xl">{name}</p>
                    <p className="text-white text-xl md:text-4xl">{symbol}</p>
                </div>

                <div className="flex flex-col md:grid grid-cols-2 gap-4 width-40 col-span-10 row-span-5 col-start-2 row-start-2 place-self-center bg-black/30 rounded-md p-6">
                    <div>
                        <p className="lg:text-lg text-yellow-200">Supply</p>
                        <p className="text-white text-xl lg:text-3xl">{Number(supply).toFixed(0)}</p>
                    </div>
                    <div>
                        <p className="lg:text-lg text-yellow-200">Market Capitalization</p>
                        <p className="text-white text-xl lg:text-3xl">{formatCurrency(Number(marketCap))}</p>
                    </div>
                    <div>
                        <p className="lg:text-lg text-yellow-200">Volume Weighted Average Price 24h</p>
                        <p className="text-white text-xl lg:text-3xl">{formatCurrency(Number(vwap24Hr))}</p>
                    </div>
                    <div>
                        <p className="lg:text-lg text-yellow-200">Change Percent 24h</p>
                        <p className="text-white text-xl lg:text-3xl">{Number(changePercent24Hr).toFixed(2)}%</p>
                    </div>
                    <div>
                        <p className="lg:text-lg text-yellow-200">Price</p>
                        <p className="text-white text-xl lg:text-3xl">{formatCurrency(Number(priceUsd))}</p>
                    </div>
                </div>

                <div className="flex col-start-11 col-span-2 place-items-center justify-center items-center">
                    <img src="public/xmark-svgrepo-com.svg" alt="Close" onClick={onClose} className=" bg-red-500 rounded-full max-w-10" />
                </div>

                <div className="flex col-span-6 lg:col-start-10 col-start-4 row-start-7 p-4 bg-yellow-300 rounded-2xl h-10 place-self-center place-items-center">
                    <img src="public/star-sharp-svgrepo-com.svg" alt="Add to favorites" className="w-10" />
                    <p className="">Add to favorites</p>
                </div>
            </div>
        </>
    )
}