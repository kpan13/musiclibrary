
import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'

const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  const API_URL = 'https://itunes.apple.com/search?term='
  useEffect(() => {
      if(search) {
          const fetchData = async () => {
              document.title = `${search} music`
              const response = await fetch(API_URL + search)
              const resData = await response.json()
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
  }, [search])
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}
return (
    <div>
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Gallery data={data} />
    </div>
)
}
export default App