import React from 'react'
import { toast } from 'react-toastify'

// this hook will do like a wraper for react-toastify
const useAlert = () => {
  const initialsOption = {}
  const alerts = {
    // make a success toast notification
    success: (message, options = initialsOption) => {
      toast.success(message, options)
    },
    // make a warning toast notification
    warning: (message, options = initialsOption) => {
      toast.warning(message, options)
    },
    // make a warning toast notification
    info: (message, options = initialsOption) => {
      toast.info(message, options)
    },
    // make a error toast notification
    error: (message, options = initialsOption) => {
      toast.error(message, options)
    },
    // make a custom toast notification
    custom: (message, options = initialsOption) => {
      toast(message, options)
    },
  }

  return alerts
}

export default useAlert
