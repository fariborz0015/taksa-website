import React from 'react'

const useDate = ({ value = '', format = 'yyyy-MM-dd' } = {}) => {
  let dNow = new Date()
  let d = new Date(value)
  let expirationTime = new Intl.DateTimeFormat('fa-IR',{
    dateStyle:'short'
  }).format(
    item?.expirationTime ? d : dNow,
  )
}

export default useDate
