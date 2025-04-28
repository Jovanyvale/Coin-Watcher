import { useState } from "react"
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
            <div className="grid grid-flow-col h-10/12 w-10/12 place-self-center bg-gray-900/85 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 fixed inset-0">
                <div className="flex flex-col w-5/12">
                    <p className="text-white text-4xl">{name}</p>
                    <p className="text-white text-4xl">{symbol}</p>
                    <img src={image} alt="Coin image" className="max-w-md" />
                </div>

                <div className="flex flex-col gap-4 width-40">
                    <div>
                        <p className="text-md text-yellow-200">Supply</p>
                        <p className="text-white text-xl">{Number(supply)}</p>
                    </div>
                    <div>
                        <p className="text-md text-yellow-200">Market Capitalization</p>
                        <p className="text-white text-xl">{formatCurrency(Number(marketCap))}</p>
                    </div>
                    <div>
                        <p className="text-md text-yellow-200">Volume Weighted Average Price 24h</p>
                        <p className="text-white text-xl">{formatCurrency(Number(vwap24Hr))}</p>
                    </div>
                    <div>
                        <p className="text-md text-yellow-200">Change Percent 24h</p>
                        <p className="text-white text-xl">{changePercent24Hr}%</p>
                    </div>
                    <div>
                        <p className="text-md text-yellow-200">Price</p>
                        <p className="text-white text-xl">{formatCurrency(Number(priceUsd))}</p>
                    </div>
                </div>

                <div className="w-2/12">
                    <img src="public/xmark-svgrepo-com.svg" alt="Close" onClick={onClose} />
                    <div>
                        <img src="public/star-sharp-svgrepo-com.svg" alt="Add to favorites" />
                        <p>Add to favorites</p>
                    </div>
                </div>
            </div>
        </>
    )
}