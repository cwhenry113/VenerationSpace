import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { NavBar } from '../components/NavBar';
import {Container, Image, Grid} from 'semantic-ui-react'
import axios from 'axios';

const Form = ({ formId, venForm, newVen = true }) => {
  
  const { data: session, status } = useSession()
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [form, setForm] = useState({
    fullName: '',
    bio: '',
    birthDate: '',
    deathDate: '',
    guardianUser: ''
  })

  const handleTextChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleImageSubmit(e, form);
    router.push("/")
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

  async function handleImageSubmit(e, form2){
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
    await axios.post('http://localhost:8000/api//post/' , {
    "fullName": form2.fullName,
    "bio": form2.bio,
    "birthDate": form2.birthDate,
    "deathDate": form2.deathDate,
    "guardianUser": form2.guardianUser,
    "pictureURL": data.secure_url
  })
  }

  return (
    
    <><div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', minHeight: '100vh'}}>
      <NavBar/>
      <Container style={{ paddingTop: '6em' }}>
      {session && session.guardian == 'true' && (
        <>
        <div className="ui attached segment">
        <form id={formId} onSubmit={handleSubmit} className="ui form" style={{paddingTop:"1rem"}}>
          <label htmlFor="fullName" style={{fontSize:"2rem"}}>Full Name:</label>
          <br/>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleTextChange}
            required
            style={{fontSize:"1.5rem", fontFamily: 'system-ui', margin:"1rem 0"}}
          />
          <br/>

          <label htmlFor="bio" style={{fontSize:"2rem"}}>Bio:</label>
          <br/>
          <textarea
            rows = '5'
            type="text"
            name="bio"
            value={form.bio}
            onChange={handleTextChange}
            required
            style={{fontSize:"1.5rem", fontFamily: 'system-ui', margin:"1rem 0"}}
          />
          <br/>

          <label htmlFor="birthDate" style={{fontSize:"2rem"}}>Birth Date:</label>
          <br/>
          <input
            type="text"
            name="birthDate"
            value={form.birthDate}
            onChange={handleTextChange}
            required
            style={{fontSize:"1.5rem", fontFamily: 'system-ui', margin:"1rem 0"}}
          />
          <br/>
          
          <label htmlFor="deathDate" style={{fontSize:"2rem"}}>Death Date:</label>
          <br/>
          <input
            type="text"
            name="deathDate"
            value={form.deathDate}
            onChange={handleTextChange}
            required
            style={{fontSize:"1.5rem", fontFamily: 'system-ui', margin:"1rem 0"}}
          />
          <br/>

          <label htmlFor="guardianUser" style={{fontSize:"2rem"}}>Set Guardian User:</label>
          <br/>
          <input
            type="text"
            name="guardianUser"
            value={form.guardianUser}
            onChange={handleTextChange}
            required
            style={{fontSize:"1.5rem", fontFamily: 'system-ui', margin:"1rem 0"}}
          />
          <br/>
          <label style={{fontSize:"2rem"}}>Upload Image:</label>
          <br/>
          <p>
              <input type="file" name="file" onChange={handleImageChange}/>
            </p>
            
            <img src={imageSrc} />
            
            {imageSrc && !uploadData && (
              <p>
                <button className="ui color1 button">Upload Files</button>
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
        </div>
          
        </>
      )}
      {session && session.guardian != 'true' && (
        <p>You must be a guardian to create a memorial</p>
      )}
      {!session && (
        <div className = "ui massive message">You must be an admin to create a memorial</div>
      )}
      </Container>
      
    </div>
    
    </>
  )
}
export default Form