import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../Config/api'
import { CryptoState } from '../CryptoContext'
import CoinInfo from '../components/CoinInfo'
import { Typography, LinearProgress } from '@mui/material'
import { numberWithCommas } from '../ui/Banner/Carousel'
import '../App.css'

const CoinPage = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()
  const { symbol, currency } = CryptoState()

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)
  }
  console.log('test', coin)
  useEffect(() => {
    fetchCoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!coin) return <LinearProgress style={{ backgroundColor: 'gold' }} />
  return (
    //flex flex-col items-center md:flex-col md:items-center lg:flex-row
    <div className="containerCoin ">
      <div
        // w-1/3 sx:w-full
        className="sidebar "
        // style={{
        //   borderRight: '2px solid grey',
        //   marginTop: 25,
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        // }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          style={{ marginBottom: 20, height: 200 }}
        />
        <Typography
          variant="h3"
          className="font-[Montserrat, sans-serif;]"
          style={{
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          className="font-[Montserrat, sans-serif;]"
          style={{
            width: '100%',
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: 'justify',
          }}
        >
          {coin?.description.en.split('. ')[0]}.
        </Typography>
        <div className="marketData">
          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
              style={{
                fontWeight: 'bold',
                marginBottom: 20,
                paddingLeft: 25,
              }}
            >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
            >
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
              style={{
                fontWeight: 'bold',
                marginBottom: 20,
                paddingLeft: 25,
              }}
            >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
              style={{
                fontWeight: 'bold',
                marginBottom: 20,
                paddingLeft: 25,
              }}
            >
              Market Cap:{' '}
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              className="font-[Montserrat, sans-serif;]"
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, 6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage
