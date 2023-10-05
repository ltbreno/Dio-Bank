import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";


interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button onClick={
            onClick} marginTop ='10px' colorScheme='purple' width='100%' >Login</Button>
    )
}

export default DButton