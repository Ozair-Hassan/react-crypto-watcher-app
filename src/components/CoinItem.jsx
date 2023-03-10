import React from 'react'

const CoinItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Current Price:</strong> {item.current_price}
            </li>
            <li>
              <strong>Market Rank:</strong> {item.market_cap_rank}
            </li>
            <li>
              <strong>Total Supply:</strong> {item.total_supply}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CoinItem
