import React from 'react'

const Input = ({ id ,placeholder, name, value, type, onChange, classes, otherAttributes }) => {
  return (
        <>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={classes}
                {...otherAttributes}
            />
        </>
  )
}

export default Input
