import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  input {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    // chrome
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      background: #4caf50;
      cursor: pointer;
    }

    // firefox
    &::-moz-range-thumb {
      appearance: none;
      -moz-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      background: black;
      cursor: pointer;
    }
  }
`

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <div>
      <div>{sliderValue}</div>
      <Container>
        <input
          type="range"
          min="1"
          max="5"
          value={sliderValue}
          onChange={e => setSliderValue(e.target.value)}
          step="1"
        />
      </Container>
    </div>
  )
}

export default Slider
