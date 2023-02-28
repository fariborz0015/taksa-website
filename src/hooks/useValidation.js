import React from 'react'
import * as Yup from 'yup'
const useValidation = () => {
  const singleValidate = async ({ rules, value, key }) => {
    const SignupSchema = Yup.object().shape(rules)
    SignupSchema?.validate({ [key]: value })
  }

  return { singleValidate }
}

export default useValidation
