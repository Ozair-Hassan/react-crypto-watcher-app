import React, { useState } from 'react'
import { Container } from '@mui/system'
import { AppBar, Toolbar, Typography, Select, MenuItem } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const Header = () => {
  let navigate = useNavigate()

  const { currency, setCurrency } = CryptoState()

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        color="transparent"
        position="static"
      >
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                navigate('/')
              }}
              className="font-[Montserrat, sans-serif;]"
              style={{
                fontSize: 25,
                flex: 1,
                color: 'gold',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Crypto Watcher
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'PKR'}>PKR</MenuItem>
              <MenuItem value={'USD'}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
