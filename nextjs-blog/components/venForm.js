import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = ({ formId, venForm, newVen = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [form, setForm] = useState({
    givenName: venForm.givenName,
    familyName: venForm.familyName
  })
  const picURL = "test";

    /**
   * handleImageChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

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

  const handleTextChange = (e) => {
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

  async function handleSubmit(e){
    e.preventDefault()
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file')
    const formData = new FormData();
    for ( const file of fileInput.files){
      formData.append('file', file);
    }
    formData.append('upload_preset', 'ven-images');
    setUploadData(data);
    const data = await fetch ('https://api.cloudinary.com/v1_1/dzkjzhzlt/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());
    console.log('data', data)
    picURL = data.secure_url
    console.log(picURL)
    
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      newVen ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }
  function handleImageChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }
    try{
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
    catch{
      
      setImageSrc(null);
    }
  }

    /**
   * handleSubmit
   * @description Triggers when the main form is submitted
   */

     /*async function handleSubmit(event) {
      event.preventDefault();
    }*/
  return (
    <>

      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="givenName">Given/First Name</label>
        <input
          type="text"
          maxLength="32"
          name="givenName"
          value={form.givenName}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="familyName">Family/Last Name</label>
        <input
          type="text"
          maxLength="32"
          name="familyName"
          value={form.familyName}
          onChange={handleTextChange}
          required
        />
          <p>
            <input type="file" name="file" onChange={handleImageChange}/>
          </p>
          
          <img src={imageSrc} />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
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