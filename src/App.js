import React from 'react'
import styled from 'styled-components'

const Test = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  position: absolute;
`
const App = () => {
  console.log('memes')
  return <Test>lol</Test>
}

export default App
