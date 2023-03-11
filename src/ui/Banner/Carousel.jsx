import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../../Config/api'
import { CryptoState } from '../../CryptoContext'

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const Carousel = () => {
  const [trending, setTrending] = useState([])
  const { currency, symbol } = CryptoState()
  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency))
      setTrending(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  console.log(trending)
  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0

    return (
      <Link
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          textTransform: 'uppercase',
          color: 'white',
          marginTop: 50,
          marginBottom: 50,
          height: '100%',
        }}
        to={`/coin/${coin.id}`}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          style={{ marginBottom: 20, marginTop: 20, height: 80 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? 'rgb(14,203,129)' : 'red',
              fontWeight: 500,
            }}
          >
            {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  }

  return (
    <div style={{ height: '50%', display: 'flex', alignItems: 'center' }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  )
}

export default Carousel
