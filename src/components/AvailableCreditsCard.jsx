export const AvailableCreditCard = ({
    credits
}) => {
    return <div className="">
        <div className="flex rounded-md bg-slate-600 p-2 shadow-sm text-white">
            <div className="pl-3 pt-4 pr-3 shadow-sm bg-slate-500 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
            </div>

            <div className="p-1 pl-4">
                <div>
                      Available credits
                </div>
                <div>
                    {credits}
                </div>
            </div>
        </div>
    </div>


}