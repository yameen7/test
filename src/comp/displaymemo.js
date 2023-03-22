import { memo } from "react";

//import React from 'react'

export const Displaymemo = ({ searchedFrontend }) => {

  console.log('DisplayFEWithMemo is rendered with ', searchedFrontend);

  return (

    <h1> Searched Frontend is {searchedFrontend}</h1>

  )

}

export default memo(Displaymemo);