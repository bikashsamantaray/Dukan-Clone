export const OverViewThisMonth = () => {
   return  <div className='flex justify-between p-6'>
        <div className=" text-xl  font-medium">
            Overview
        </div>
        <button className="flex rounded-md bg-white p-2 shadow-sm">
            <div className="">
                This Month
            </div>
            <div className="pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </button>
 </div>
}