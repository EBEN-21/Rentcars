import React from 'react'

const OfferCard = ({img, title, description}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className='bg-[#ECF5FF] rounded-2xl w-[64px] flex items-center justify-center h-[64px] '>
            <img src={img} alt={title} width={30}  />
        </div>
      
      <div className='flex flex-col items-start justify-center gap-2'>
        <h4 className="font-medium text-xl ">{title}</h4>
        <p className=" w-[350px] font-normal text-sm text-[#6D6D6D]">{description}</p>
      </div>
    </div>
    </div>
  )
}

export default OfferCard
