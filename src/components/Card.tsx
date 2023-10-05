import {  useState } from 'react'
import { Box,Center,Input } from "@chakra-ui/react"
import { login } from "../Services/login"
import DButton from "./DButton"



export const Card = ({ children }: any) => {

    return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        { children }
        
    </Box>
    );    
};