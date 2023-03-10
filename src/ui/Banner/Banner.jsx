import { Container, Typography } from '@mui/material'
import React from 'react'
import logo from '../../img/header1.jpeg'
import Carousel from './Carousel'
const Banner = () => {
  return (
    <div className="bg-banner">
      <Container
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          <Typography
            className="font-[Montserrat, sans-serif;]"
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Crypto Watcher
          </Typography>
          <Typography
            className="font-[Montserrat, sans-serif;]"
            variant="subtitle2"
            style={{
              color: 'darkgray',
              textTransform: 'capitalize',
            }}
          >
            Get the latest information on your favourite Crypto Currencies
            across the globe
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner
