export default function Search() {

    return (
        <form action="" className="flex mt-6 gap-6 flex-col lg:flex-row justify-self-center items-center">

            <div className="flex bg-white rounded-2xl p-2 w-80">
                <img src="public\search-svgrepo-com.svg" alt="search icon"
                    className="max-w-10" />
                <input type="text"
                    id="coinSearch"
                    placeholder="Search a coin"
                    className="bg-light-gray rounded-2xl ml-1 px-3 outline-none w-full"
                />
            </div>

            <div className="flex bg-white rounded-2xl p-2 max-w-3xl w-80">
                <img src="public\sort-amount-down-svgrepo-com.svg" alt="sort icon"
                    className="max-w-10" />
                <select name="" id="sortInput"
                    className="bg-light-gray rounded-2xl ml-1 px-3 outline-none w-full appearance-none">
                    <option value="sortName">Name</option>
                    <option value="sortMarketCap">Market Cap</option>
                    <option value="sort24h">24H Change</option>
                </select>
            </div >

        </form >
    )
}