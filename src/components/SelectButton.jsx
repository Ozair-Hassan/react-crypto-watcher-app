import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="selectButton font-[Montserrat, sans-serif;]"
      style={{
        backgroundColor: selected ? 'gold' : '',
        color: selected ? 'black' : '',
        fontWeight: selected ? 800 : 500,
        width: '22%',
      }}
    >
      {children}
    </span>
  )
}

export default SelectButton
