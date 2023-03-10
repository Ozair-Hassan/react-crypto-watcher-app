import React from 'react'
import { useEffect, useState } from 'react'
import CoinItem from './CoinItem'
import Spinner from '../ui/Spinner'

const CoinGrid = ({ items, isLoading }) => {
  const [nativeItems, setNativeItems] = useState(null)

  useEffect(() => {
    if (Array.isArray(items)) {
      setNativeItems(items)
    } else {
      setNativeItems([items])
    }
  }, [items])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {nativeItems.length ? (
            nativeItems.map((item) => (
              <CoinItem
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No results found</p>
            </div>
          )}
        </section>
      )}
    </>
  )
}

export default CoinGrid
