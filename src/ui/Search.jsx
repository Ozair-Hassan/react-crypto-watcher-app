import React, { useState } from 'react'

const Search = ({ getQuery, searchText, handleChange }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Crypto Currency"
          // value={searchText}
          value={text}
          // onChange={(e) => onChange(e.target.value)}
          onChange={(e) => {
            handleChange(e)
            setText(e.target.value)
          }}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
