import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = ({ formId, venForm, newVen = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    givenName: venForm.givenName,
    familyName: venForm.familyName
  })

  const putData = async (form) => {
    const { id } = router.query
    try {
      const res = await fetch(`/api/veneration/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        throw new Error(res.status)
      }
      const { data } = await res.json()
      mutate(`/api/veneration/${id}`, data, false)
      router.push('/')
    } catch (error) {
      setMessage('Failed to update veneration')
    }
  }

  const postData = async (form) => {
    try {
      const res = await fetch('/api/veneration', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        throw new Error(res.status)
      }
      router.push('/')
    } catch (error) {
      setMessage('Failed to add veneration')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setForm({
      ...form,
      [name]: value,
    })
  }

  const formValidate = () => {
    let err = {}
    if (!form.givenName) err.name = 'Given/First name is required'
    if (!form.familyName) err.owner_name = 'Family/Last name is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      newVen ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="givenName">Given/First Name</label>
        <input
          type="text"
          maxLength="32"
          name="givenName"
          value={form.givenName}
          onChange={handleChange}
          required
        />

        <label htmlFor="familyName">Family/Last Name</label>
        <input
          type="text"
          maxLength="32"
          name="familyName"
          value={form.familyName}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}
export default Form