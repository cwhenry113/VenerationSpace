import { useRouter } from 'next/router'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { NavBar } from '../../../components/NavBar';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { Container } from 'semantic-ui-react';


export default function About(){ 
    const router = useRouter()
    const { id } = router.query
    var personId = id
    var picURL = ''   
    const { data: session, status } = useSession() 
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [full, setFull] = useState('')
    useEffect(() => getFull())
    const getFull = () => {
      axios.get('http://localhost:8000/api/getOne/'+ personId)
      .then(res => {
        setFull(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
    const [form, setForm] = useState({
      fullName: '',
      bio: '',
      birthDate: '',
      deathDate: ''
  })
  const handleFieldChange = (e) => {
    setForm(old => ({ ...old, [e.target.id]: e.target.value }))
}

const handleSubmit = async (e) => {
  e.preventDefault();
  handleImageSubmit(e);
  var fullName = form.fullName
  var bio = form.bio
  var birthDate = form.birthDate
  var deathDate = form.deathDate
  var pictureURL = picURL
  if(form.fullName.length === 0){
    fullName = full.fullName
  }
  if(form.bio.length === 0){
    bio = full.bio
  }
  if(form.birthDate.length === 0){
    birthDate = full.birthDate
  }
  if(form.deathDate.length === 0){
    deathDate = full.deathDate
  }
  await axios.patch('http://localhost:8000/api//update/' + personId, {
    "fullName": fullName,
    "bio": bio,
    "birthDate": birthDate,
    "deathDate": deathDate
  })
  router.push("/venerations/"+ personId)
  .then(function(response) {
    res.send(response.data)
})
.catch(function(error) {
  })
  
};

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
async function handleImageSubmit(e){
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
  picURL = data.secure_url
  await axios.patch('http://localhost:8000/api//update/' + personId, {
    "pictureURL": data.secure_url
  })
}


return(
<div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', minHeight: '100vh'}}>
  <NavBar/>
  <Container style={{ paddingTop: '6em' }}>
  {session && session.user.name == full.guardianUser && (
    <>
    <div class="ui icon message">
      <i class="exclamation icon"></i>
      <div class="content">
        <div class="header">
            Don't forget to save!
        </div>
        <p>Press the "Save changes" button at the bottom when you're done to be sure your Veneration includes your changes.</p>
      </div>
    </div>
    <div className="ui attached segment">
      <form onSubmit={handleSubmit} className="ui form"> 
        <div className="massive field">
        <label>
          <p style={{fontSize:"2rem"}}>Old Name:</p>
          <p style={{fontWeight: 'normal', fontSize:"1.5rem", margin: "0 3%"}}>{full.fullName}</p>
        </label>
        <br/>
        <input onChange={handleFieldChange} value={form.fullName} id = "fullName" style={{fontSize:"1.5rem", fontFamily: 'system-ui'}} placeholder = "Leave blank to not change"/>
        </div>
        <div className="massive field">
        <label style={{fontSize:"2rem"}}>
          <p style={{fontSize:"2rem"}}>Old Bio:</p>
          <p style={{fontWeight: 'normal', fontSize:"1.5rem", margin: "0 3%"}}>{full.bio}</p>
        </label>
        <br/>
        <textarea rows="5" onChange={handleFieldChange} value={form.bio} id = "bio" style={{fontSize:"1.5rem", fontFamily: 'system-ui'}} placeholder = "Leave blank to not change"/>
        </div>
        <div className="massive field">
        <label style={{fontSize:"2rem"}}>
          <p style={{fontSize:"2rem"}}>Old Birth Date:</p>
          <p style={{fontWeight: 'normal', fontSize:"1.5rem", margin: "0 3%"}}>{full.birthDate}</p>
        </label>
        <br/>
        <input onChange={handleFieldChange} value={form.birthDate} id = "birthDate" style={{fontSize:"1.5rem", fontFamily: 'system-ui'}} placeholder = "Leave blank to not change"/>
        </div>
        <div className="massive field">
        <label style={{fontSize:"2rem"}}>
          <p style={{fontSize:"2rem"}}>Old Death Date:</p>
          <p style={{fontWeight: 'normal', fontSize:"1.5rem", margin: "0 3%"}}>{full.deathDate}</p>
        </label>
        <br/>
        <input onChange={handleFieldChange} value={form.deathDate} id = "deathDate" style={{fontSize:"1.5rem", fontFamily: 'system-ui'}} placeholder = "Leave blank to not change"/>
        </div>
        <label style={{fontSize:"2rem"}}>
          <p style={{fontWeight: 'bold', fontSize:"2rem"}}>Upload New Photo:</p>
        </label>
        <p>
        <input type="file" name="file"  accept="image/png, image/jpeg" onChange={handleImageChange}/>
        <br/><br/>
        <img src={imageSrc} />
        </p>
        
        <button className="ui color1 button" variant='contained'>Save Changes</button>
      </form>

    </div>
      
    </>
  )}
  
  {!session && (
          <>
           <div className = "ui massive message">You are not the guardian of this page</div>
          </>
  )}
  {session && session.user.name != full.guardianUser && (
    <>
      <div className = "ui massive message">You are not the guardian of this page</div>
    </>
  )}
  </Container> 
  
</div>
)
}