import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { NavBarOther } from '/components/NavBarOther';
import { Search } from '/components/Search';
export default function About(){ 
  var personId = "637715ac6e775a99f72685b9"
  //Gets person's photo
  const [pic, setPic] = useState('')
  useEffect(() => {getPic();}, [])
  const getPic = () => {
    axios.get('http://localhost:3000/api/getOne/'+ personId)
    .then(res => {
      setPic(res.data.pictureURL.toString())
    }).catch(err => {
      console.log(err)
    })
  }
    //Gets person's name
    const [name, setName] = useState('')
    useEffect(() => {getName();}, [])
    const getName = () => {
      axios.get('http://localhost:3000/api/getOne/'+ personId)
      .then(res => {
        console.log(res.data.name)
        setName(res.data.firstName + " " + res.data.middleName + " " + res.data.lastName)
      }).catch(err => {
        console.log(err)
      })
    }
    //Gets person's birth and death dates
    const [dates, setDates] = useState('')
    useEffect(() => {getDate();}, [])
    const getDate = () => {
      axios.get('http://localhost:3000/api/getOne/' + personId)
      .then(res => {
        setDates(res.data.birthDate + "-" + res.data.deathDate)
      }).catch(err => {
        console.log(err)
      })
    }
    //Gets person's bio
    const [bio, setBio] = useState('')
    useEffect(() => {getBio();}, [])
    const getBio = () => {
      axios.get('http://localhost:3000/api/getOne/' + personId)
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
      <Image src={pic} size='medium' centered />
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