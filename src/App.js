import React from 'react'
import './App.css'
import Row from './components/Row'
import requests from './requests'
import Banner from './components/Banner'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='main__app'>
      
      <Nav />
      <Banner />
      <Row title='Netflix Original' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title='Trending Now'  fetchURL={requests.fetchTrending} />
      <Row title='Top Rated'  fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies'  fetchURL={requests.fetchActionMovies} />
      <Row title='Comedy Movies'  fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies'  fetchURL={requests.fetchHorrorMovies} />
      <Row title='Romance Movies'  fetchURL={requests.fetchRomanceMovies} />
      <Row title='Documentaries'  fetchURL={requests.fetchDocumentaries} />
      
    </div>
  )
}

export default App