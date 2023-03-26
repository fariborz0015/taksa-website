import { useState } from 'react'

const useValidation = (initialState, validationSchema) => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})

  const validate = async ({ data = formData, schema = validationSchema }) => {
    try {
      await schema.validate(data, { abortEarly: false })
      setErrors({})
      return true
    } catch (validationErrors) {
      const newErrors = {}
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message
      })
      setErrors(newErrors)
      return false
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  return {
    formData,
    errors,
    handleChange,
    validate,
  }
}

export default useValidation
