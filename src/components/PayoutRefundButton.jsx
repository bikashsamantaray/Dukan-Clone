export const PayoutRefundButton = ({
    title,
    paymentno
}) => {
    return <div className="p-3 ">
        <button className=" rounded-full p-4 text-md text-gray-500 bg-gray-200">{title} ({paymentno})</button>
        
    </div>
}