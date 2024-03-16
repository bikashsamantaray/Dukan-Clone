export const Orders = ({
    orderid,
    statusOfOrder,
    transactionId,
    refundDate,
    orderAmount

}) => {

    return <div className="grid grid-cols-5 p-3">
        <div className="text-blue">
            {orderid}
        </div>
        <div>
            {statusOfOrder}
        </div>
        <div>
            {transactionId}
        </div>
        <div>
            {refundDate}
        </div>
        <div className="text-right">
            ₹{orderAmount}
        </div>



    </div>
    
}