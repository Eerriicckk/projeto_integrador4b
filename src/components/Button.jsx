import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button className='botao'
            {...props}
            >{children}</button>
    )
}

export default Button