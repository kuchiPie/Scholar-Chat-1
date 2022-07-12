import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyPage = () => {
    const {id,token} = useParams();
  return (
    <>
        {id}
        {token}
        {console.log(id)}
    </>
  )
}

export default VerifyPage