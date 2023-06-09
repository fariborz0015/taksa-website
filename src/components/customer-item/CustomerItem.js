import React from 'react'

const CustomerItem = ({ item }) => {
  return (
    <div className="  flex justify-center items-center h-40">
      <img
        src={item?.src}
        className="max-w-[110px] max-h-[110px] w-full object-cover"
      />
    </div>
  )
}

export default CustomerItem
