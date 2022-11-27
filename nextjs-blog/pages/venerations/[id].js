import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { NavBar } from '../../components/NavBar';
import { useSession } from 'next-auth/react'
export default function About(){ 
  const router = useRouter()
  const { id } = router.query
  var personId = id
  const { data: session, status } = useSession()
  const [form, setForm] = useState({
    text: ''
})

  const handleFieldChange = (e) => {
    setForm(old => ({ ...old, [e.target.id]: e.target.value }))
}
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
  const [comments, setComments] = useState('')
  useEffect(() => {getComments();}, [])

  const getComments = async () => {
    axios.get('http://localhost:8000/api/getComments/'+ personId)
    .then(res => {
      setComments(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  getComments()
  const venComments = Array.from(comments).map((comments) =>{
    return(
      <div key = {comments._id}>
        <div> {comments.author}: {comments.text}</div>
        {session && session.user.name == full.guardianUser && (
          <>
          <button onClick = {() => handleDelete(comments._id)} className="ui color1 button" variant='contained'>Delete</button>
          </>
        )}
            
        <br></br>
      </div>
    )
  })
  const handleDelete = async (id) => {
    await axios.delete('http://localhost:8000/api//deleteComment/' + id)
    getComments()
  };
  const handleSubmit = async (e) => {
    await axios.post('http://localhost:8000/api//postComment/' , {
      "parent": personId,
      "author": session.user.name,
      "text": form.text
    })
    getComments()
  };
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <NavBar/>
      <Container text style={{ paddingTop: '6em' }}>
      <Grid.Column style={{ textAlign: "right" }}>
      {session && session.user.name == full.guardianUser && (
          <>
          <button class="ui right labeled icon button">
              <a href={'/venerations/update/'+ personId}>
              <i class="configure icon"></i>
                Options</a>
            </button>
          </>
        )}



      </Grid.Column>
      <div class="ui massive message" style = {{ margin:'5rem'}}>
      <h1 style={{textAlign: "center", fontSize:"50px", fontFamily:"MrsEaves-Italic"}}>{full.fullName}</h1>
      <h3 style={{textAlign: "center", fontSize:"30px"}}>{full.birthDate} - {full.deathDate}</h3>
      <Image src={full.pictureURL} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"20px", fontFamily:"MrsEaves-Italic"}}>{full.bio}</p>
      <h3 style={{textAlign: "center"}}>Comments

      {session && (
          <>
          <input onChange={handleFieldChange} value={form.text} id = "text" style={{fontSize:"2rem"}} placeholder = "Leave blank to not change"/>
          <button onClick = {() => handleSubmit()} className="ui color1 button" variant='contained'>Send</button>
          </>
        )}
        <div>
          {venComments}
        </div>
      </h3>
      
            </div>
      </Container>

      <div class="ui divider"></div>

    </div>
  )
}