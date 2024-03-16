export const PayoutRefundButtonBlue = ({
    title,
    paymentno
}) => {
    return <div className="p-3 ">
        <button className=" rounded-full p-4 text-md text-white bg-blue">{title} ({paymentno})</button>
        
    </div>
}