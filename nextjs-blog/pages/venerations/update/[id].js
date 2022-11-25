import { useRouter } from 'next/router'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'


export default function About(){ 
    const router = useRouter()
    const { id } = router.query
    var personId = id
    var picURL = 'test'    
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
  console.log(picURL)
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
<form onSubmit={handleSubmit}> 
  <div className="massive field">
  <label style={{fontSize:"2rem"}}>Old Name: {full.fullName}</label>
  <br/>
  <input onChange={handleFieldChange} value={form.fullName} id = "fullName" style={{fontSize:"2rem"}} placeholder = "Leave blank to not change"/>
  </div>
  <div className="massive field">
  <label style={{fontSize:"2rem"}}>Old Bio: {full.bio}</label>
  <br/>
  <input onChange={handleFieldChange} value={form.bio} id = "bio" style={{fontSize:"2rem"}} placeholder = "Leave blank to not change"/>
  </div>
  <div className="massive field">
  <label style={{fontSize:"2rem"}}>Old Birth Date: {full.birthDate}</label>
  <br/>
  <input onChange={handleFieldChange} value={form.birthDate} id = "birthDate" style={{fontSize:"2rem"}} placeholder = "Leave blank to not change"/>
  </div>
  <div className="massive field">
  <label style={{fontSize:"2rem"}}>Old Death Date: {full.deathDate}</label>
  <br/>
  <input onChange={handleFieldChange} value={form.deathDate} id = "deathDate" style={{fontSize:"2rem"}} placeholder = "Leave blank to not change"/>
  </div>
  <label style={{fontSize:"2rem"}}>Upload New Photo:</label>
  <p>
  <input type="file" name="file" onChange={handleImageChange}/>
  </p>
  <button className="ui color1 button" variant='contained'>Submit</button>
</form>


)
}