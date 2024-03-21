export const Orders = ({
    orderid,
    statusOfOrder,
    transactionId,
    refundDate,
    orderAmount

}) => {

    return <tr>
                <th className="text-blue font-normal p-3 ">
                    {orderid}
                </th>
                <th className="font-normal">
                    {statusOfOrder}
                </th>
                <th className="font-normal">
                    {transactionId}
                </th>
                <th className="font-normal">
                    {refundDate}
                </th>
                <th className="font-normal">
                    ₹{orderAmount}
                </th>



    </tr>
    
}