import { useRouter } from 'next/router'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'


export default function About(){ 
    const router = useRouter()
    const { id } = router.query
    var personId = id

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

const handleSubmit = async () => {
  console.log('SAVING VENERATION CHANGES');
  //!!!THIS WILL ALWAYS DO THE SAME THING. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
  const firstName = "John";
  const lastName = "Doe";
  const middleName = "Hubert";
  const bday = new Date("01/01/1900");
  const death = new Date("01/01/2000");
  const bio = "This is a short bio for the boilerplate function"
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const res = await fetch('/api/veneration/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "_id": `${personId}`,
    "fullName": `${form.fullName}`

    }),
  })};


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
  <button className="ui color1 button" variant='contained'>Submit</button>
</form>


)
}