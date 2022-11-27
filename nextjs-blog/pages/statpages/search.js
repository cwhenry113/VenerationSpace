import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import {React, useEffect, useState, Route} from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar } from '/components/NavBar';

export default function Search(){
  
  const [data, setPages] = useState('')
  useEffect(() => {getPages();}, [])

  const getPages = async (id) => {
    axios.get('http://localhost:8000/api/getAll/'+ id)
    .then(res => {
      setPages(res.data)
    }).catch(err => {
      console.log(err)
    })
  }


  const [form, setForm] = useState({
    name: ''
})

const handleFieldChange = (e) => {
  setForm(old => ({ ...old, [e.target.id]: e.target.value }))
}

const handleSubmit = async (e) => {
  e.preventDefault();
  getPages(form.name);
};
  const venerations = Array.from(data).map((data) =>{
    return(
      <div key = {data._id}>
        <div><a href={'/venerations/'+ data._id}> {data.fullName} </a></div>
     <br></br>
      </div>
    )
  })

  return(

      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div className="ui massive message" style = {{ margin:'5rem', padding:'3rem'}}>
        <div className="header" style = {{ margin:'1rem auto'}}>
          <form onSubmit={handleSubmit}> 
            <div className="massive field">
              <input onChange={handleFieldChange} value={form.name} id = "name" style={{fontSize:"2rem"}} placeholder = "Search"/>
            </div>
            <button className="ui color1 button" variant='contained'>Submit</button>
          </form>
        </div>
          {venerations}
        </div>
      </div>
        <style jsx>{`
            .container{
                min-height: 100vh;
            }
            `}
        </style>
    </div>
    )
}