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
        <div className="ui massive " style = {{borderBottom: "0.01em solid", paddingTop:'5%'}}> 
        {session && session.user.name == full.guardianUser && (
            <>
            <button onClick = {() => handleDelete(comments._id)} className="ui color1 button" variant='contained' style = {{float: 'right'}}>
            <i class="trash icon"></i>
            </button>
            </>
          )}
          <div style = {{textAlign: 'left', fontSize: '0.75em'}}>
          {comments.author}:
          </div>
          <div style = {{fontSize: '0.5em', overflowWrap: 'break-word', lineHeight: "1.6"}}>
          {comments.text}
          </div>
        </div>
      </div>
    )
  })
  const handleDelete = async (id) => {
    await axios.delete('http://localhost:8000/api//deleteComment/' + id)
    getComments()
  };
  const handleSubmit = async (e) => {
    if(form.text != ''){
      await axios.post('http://localhost:8000/api//postComment/' , {
        "parent": personId,
        "author": session.user.name,
        "text": form.text
      })
      getComments()
    }
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
                Edit</a>
            </button>
          </>
        )}



      </Grid.Column>
      <div className="ui massive message" style = {{ margin:'5rem'}}>
      <h1 style={{textAlign: "center", fontSize:"50px", fontFamily:"MrsEaves-Italic"}}>{full.fullName}</h1>
      <h3 style={{textAlign: "center", fontSize:"30px"}}>{full.birthDate} - {full.deathDate}</h3>
      <Image src={full.pictureURL} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"20px", fontFamily:"MrsEaves-Italic"}}>{full.bio}</p>
      <h3 style={{textAlign: "center"}}>Comments
      </h3>

      {session && (
          <>
          <input onChange={handleFieldChange} value={form.text} id = "text" style={{fontSize:"2rem", fontFamily: 'system-ui'}} placeholder = "Comment..."/>
          <button onClick = {() => handleSubmit()} className="ui color1 button" variant='contained' style = {{float: 'right'}}>Send</button>
          </>
        )}
        <div>
          {venComments}
        </div>
      
            </div>
      </Container>

      <div class="ui divider"></div>

    </div>
  )
}