import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CoinGrid from '../components/CoinGrid'
import Banner from '../ui/Banner/Banner'
import Search from '../ui/Search'

const Homepage = () => {
  const [items, setItems] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState([true])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      let result
      try {
        result = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        )
      } catch (error) {
        console.log(error)
      }

      setItems(result.data)
      setFilteredResults(result.data)
      setIsLoading(false)
    }
    fetchItems()
    console.log(items)
  }, [])

  const handleSearchChange = (e) => {
    // setSearchText(e.target.value)
    console.log(e)
    console.log(items)
    let tempHoldingArray = []
    items.map((innerObj) => {
      if (innerObj.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        tempHoldingArray.push(innerObj)
      }
    })
    console.log(tempHoldingArray)
    setFilteredResults(tempHoldingArray)
  }

  return (
    <>
      <Banner />

      <Search
        getQuery={(q) => setQuery(q)}
        searchText={searchText}
        handleChange={handleSearchChange}
      />
      <CoinGrid
        isLoading={isLoading}
        items={filteredResults}
      />
    </>
  )
}

export default Homepage
