import { useRouter } from 'next/router'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
export default function About(){ 
    const router = useRouter()
    const { id } = router.query
    var personId = id
  //Gets person's photo
  const [pic, setPic] = useState('')
  useEffect(() => getPic())
  const getPic = () => {
    axios.get('http://localhost:8000/api/getOne/'+ personId)
    .then(res => {
      setPic(res.data.pictureURL.toString())
    }).catch(err => {
      console.log(err)
    })
  }
    //Gets person's name
    const [name, setName] = useState('')
    useEffect(() => getName())
    const getName = () => {
      axios.get('http://localhost:8000/api/getOne/'+ personId)
      .then(res => {
        console.log(res.data.name)
        setName(res.data.firstName + " " + res.data.middleName + " " + res.data.lastName)
      }).catch(err => {
        console.log(err)
      })
    }
    //Gets person's birth and death dates
    const [dates, setDates] = useState('')
    useEffect(() => getDate())
    const getDate = () => {
      axios.get('http://localhost:8000/api/getOne/' + personId)
      .then(res => {
        setDates(res.data.birthDate + "-" + res.data.deathDate)
      }).catch(err => {
        console.log(err)
      })
    }
    //Gets person's bio
    const [bio, setBio] = useState('')
    useEffect(() => getBio)
    const getBio = () => {
      axios.get('http://localhost:8000/api/getOne/' + personId)
      .then(res => {
        console.log(res.data.bio)
        setBio(res.data.bio)
      }).catch(err => {
        console.log(err)
      })
    }

return(
<form> 
<div class="field">
    <label for="name">Id:</label>
    <input type="text" id="name" name="name" value={id} placeholder="Edit the ID"/>
    </div>
    <div class="field">
    <label for="name">Bio:</label>
    <input type="text" id="name" name="name" value={bio} placeholder="Edit the ID"/>
    </div>

</form>
)
}