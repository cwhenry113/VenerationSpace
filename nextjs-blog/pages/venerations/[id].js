import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { Search } from '/components/Search';
import { useRouter } from 'next/router'
import { NavBar } from '../../components/NavBar';
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

    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <NavBar/>
      <Container text style={{ paddingTop: '6em' }}>
      <Search />
      <Grid.Column style={{ textAlign: "right" }}>
            <button class="ui right labeled icon button">
              <i class="configure icon"></i>
              Options
            </button>
            </Grid.Column>
            <div class="ui massive message" style = {{ margin:'5rem'}}>
            <h1 style={{textAlign: "center", fontSize:"50px", fontFamily:"MrsEaves-Italic"}}>{full.fullName}</h1>
      <h3 style={{textAlign: "center", fontSize:"30px"}}>{full.birthDate} - {full.deathDate}</h3>
      <Image src={full.pictureURL} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"20px", fontFamily:"MrsEaves-Italic"}}>{full.bio}</p>
      <h3 style={{textAlign: "center"}}>Add Memory
      <form>
        <input align="right" type="text" id="comment" name="comment"/>
      </form>
      </h3>
            </div>
      </Container>

      <div class="ui divider"></div>

    </div>
  )
}