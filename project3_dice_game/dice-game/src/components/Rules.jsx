import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After clicking, if selected number is equal to dice number you will get same points as dice</p>
            <p>4. If  you get wrong guess then 2 points will be deducted </p>
        </div>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .text{
        margin: 24px;

    }
`