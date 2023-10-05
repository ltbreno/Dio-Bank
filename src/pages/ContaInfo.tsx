import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const ContaInfo = () => { 
    return (
        <>
        <Text fontSize='3x1' fontWeight='bold'>
            Informações da conta
        </Text>
        <Link to='/conta/1' >
            <Text fontSize='3x1' fontWeight='bold'>
                Conta
            </Text>
        </Link>
        </>
        
    )
}
export default ContaInfo