import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { HistoricalChart } from '../Config/api'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CryptoState } from '../CryptoContext'
import { CircularProgress, Select } from '@mui/material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js'
import { chartDays } from '../Config/data'
import { width } from '@mui/system'
import SelectButton from './SelectButton'

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState()
  const [days, setDays] = useState(1)

  const { currency, symbol } = CryptoState()

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency))

    setHistoricalData(data.prices)
  }
  console.log('data', historicalData)
  useEffect(() => {
    fetchHistoricData()
  }, [currency, days])

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="containerCoinInfo">
        {!historicalData ? (
          <CircularProgress
            style={{ color: 'gold' }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Chart
              type="line"
              data={{
                labels: historicalData?.map((coin) => {
                  let date = new Date(coin[0])
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`
                  return days === 1 ? time : date.toLocaleDateString()
                }),

                datasets: [
                  {
                    data: historicalData?.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: '#EEBC1D',
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: 'flex',
                marginTop: 20,
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default CoinInfo
