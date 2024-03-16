export const NextPaymentCard = ({
    date,
    time
}) => {
    return <div className=" rounded-md flex justify-between shadow-sm p-4 bg-hover">
        <div className="">
            Next Payment Date:
        </div>
        <div>
            {date}
            {time}
        </div>
        
            
        
    </div>
}