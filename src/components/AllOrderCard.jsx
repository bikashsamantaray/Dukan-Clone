import { Orders } from "./Orders"

export const AllOrderCard = () => {
    return <div className="bg-white rounded-md  p-2 ">
                <div className=" flex justify-between ">
                    <div className="p-4">
                        <form class="max-w-md mx-auto">   
                                        
                                        <div class="relative">
                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900
                                                rounded-lg bg-gray-50   dark:border-gray-600 dark:placeholder-gray-400
                                                dark:text-gray-400  dark:focus:border-blue-500" placeholder="Order ID or transaction ID" required />
                                            
                                        </div>
                        </form>
                    </div>
                    <div className="flex">
                            <div className="p-4">
                                <button className="flex rounded-md bg-white p-2 shadow-md">
                                    <div className="">
                                        Sort
                                    </div>
                                    <div className="pl-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                        </svg>

                                    </div>
                                </button>
                            </div>

                            <div className="p-4">
                                <button className=" rounded-md bg-white shadow-md p-2">
                                        <div p-7>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>


                                        </div>
                                </button>
                            </div>
                    
                    </div>
            </div>

            <div className="overflow-x-scroll overflow-y-scroll h-[300px] w-[600px] md:h-auto md:max-h-[500px] md:w-auto">
                        <div className="grid grid-cols-5 bg-gray-100 rounded-md p-3 font-medium">

                            <div>
                                Order ID
                            </div>
                            <div>
                                Status
                            </div>
                            <div>
                                Transaction ID
                            </div>
                            <div>
                                Refund Date
                            </div>
                            <div className="text-right">
                                Order Amount
                            </div>

                    </div>
                    <div>
                        <Orders orderid={"#281209"} statusOfOrder={"🟢Successful"} transactionId={"TRX123456"} refundDate={"Today, 8:45 PM"} orderAmount={"1125.00"}/>
                        <Orders orderid={"#281210"} statusOfOrder={"⚪Processing"} transactionId={"TRX789012"} refundDate={"Tomorrow, 10:00 AM"} orderAmount={"950.00"}/>
                        <Orders orderid={"#281211"} statusOfOrder={"🟢Successful"} transactionId={"TRX345678"} refundDate={"Yesterday, 3:30 PM"} orderAmount={"750.00"}/>
                        <Orders orderid={"#281212"} statusOfOrder={"🟢Successful"} transactionId={"TRX901234"} refundDate={"Today, 11:20 AM"} orderAmount={"546.66"}/>
                        <Orders orderid={"#281213"} statusOfOrder={"⚪Processing"} transactionId={"TRX567890"} refundDate={"Tomorrow, 9:00 AM"} orderAmount={"200.00"}/>
                        <Orders orderid={"#281214"} statusOfOrder={"⚪Processing"} transactionId={"TRX098765"} refundDate={"Yesterday, 2:00 PM"} orderAmount={"125.00"}/>
                        <Orders orderid={"#281215"} statusOfOrder={"🟢Successful"} transactionId={"TRX456789"} refundDate={"Today, 10:30 AM"} orderAmount={"234.02"}/>
                        <Orders orderid={"#281216"} statusOfOrder={"⚪Processing"} transactionId={"TRX987654"} refundDate={"Tomorrow, 11:30 AM"} orderAmount={"115.03"}/>
                       
                    </div>
            </div>
    </div>
}