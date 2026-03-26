import React from 'react'
import { CustomCard } from "../../../chakra/CustomCard.jsx";
import {Tag, Text} from '@chakra-ui/react'

const InfoCard = ( { imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize= "cover" bgRepeat= "no-repeat" bgColor ={inverted ? "p.purple" : "white"} >
        <Tag bg = { inverted ? "white" : "p.purple" } color = {inverted ? "p.purple" : "white" } borderRadius = "full"
        > {tagText} </Tag>
        <Text textStyle= "h5" mt= "4" fontWeight= "medium"  color={inverted ? "white" : "p.purple"} > {text} </Text>
    </CustomCard>
  )
}

export default InfoCard

