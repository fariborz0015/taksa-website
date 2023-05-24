import React from 'react'

const CustomerItem = ({ item }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={item?.src}   />
    </div>
  )
}

export default CustomerItem
