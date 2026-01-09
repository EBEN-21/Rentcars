import React from 'react'

const OfferCard = ({img, title, description}) => {
  return (
    
      <div className="flex flex-col lg:flex-row items-center gap-4 ">
        <div className='bg-[#ECF5FF] rounded-2xl p-4 flex items-center justify-center  '>
            <img src={img} alt={title} width={27}  />
        </div>
      
        <div className='flex flex-col lg:items-start items-center justify-center gap-1'>
          <h4 className="font-medium text-lg ">{title}</h4>
          <p className=" lg:w-[330px] font-normal text-sm text-[#6D6D6D]">{description}</p>
        </div>
    </div>
  )
}

export default OfferCard
