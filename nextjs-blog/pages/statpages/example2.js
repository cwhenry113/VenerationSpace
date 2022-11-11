import Head from 'next/head'
import Link from 'next/link'
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { NavBarOther } from '/components/NavBarOther';
import { Search } from '/components/Search';
import { UserInput } from '/components/UserInput';
const src1 = 'https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
var personId = "636c7abcc24146f70adb5536"

export default function About(){  
  //Gets person's name
  const [name, setName] = useState('')
  useEffect(() => {getName();}, [])
  const getName = () => {
    axios.get('http://localhost:8000/api/getOne/'+ personId)
    .then(res => {
      console.log(res.data.name)
      setName(res.data.name)
    }).catch(err => {
      console.log(err)
    })
  }
  //Gets person's birth and death dates
  const [dates, setDates] = useState('')
  useEffect(() => {getDate();}, [])
  const getDate = () => {
    axios.get('http://localhost:8000/api/getOne/' + personId)
    .then(res => {
      console.log(res.data.dates)
      setDates(res.data.dates)
    }).catch(err => {
      console.log(err)
    })
  }
  //Gets person's bio
  const [bio, setBio] = useState('')
  useEffect(() => {getBio();}, [])
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
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <NavBarOther />
      <Container text style={{ paddingTop: '6em' }}>
      <Search />
      <Grid.Column style={{ textAlign: "right" }}>
            <button class="ui right labeled icon button">
              <i class="configure icon"></i>
              Options
            </button>
          </Grid.Column>
      <h1 style={{textAlign: "center", fontSize:"3vw", fontFamily:"MrsEaves-Italic"}}>{name}</h1>
      <h3 style={{textAlign: "center", fontSize:"1.5vw"}}>{dates}</h3>
      <Image src={src1} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"1.5vw", fontFamily:"MrsEaves-Italic"}}>{bio}</p>
      <h3 style={{textAlign: "center"}}>Add Memory
      <form>
        <input align="right" type="text" id="comment" name="comment"/>
      </form>
      </h3>
      </Container>

      <div class="ui divider"></div>

    </div>
  )
}