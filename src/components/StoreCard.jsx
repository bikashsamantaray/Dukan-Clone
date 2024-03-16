export const StoreCard = ({
    storename
}) =>{
    return <div className="flex p-3 text-white">

        <div >
            <img className="rounded-md w-12 h-12" src="/dukan.png"></img>
        </div>

        <div className="pl-4">
            <div className="font-normal">
                {storename}
                
            </div>
            <div>
                <a className=" font-light underline" href="">Visit Store</a>
            </div>
        </div>

        <div className="pl-11 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>


        </div>
        

    </div>
}