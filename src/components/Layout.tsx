
import { Box } from "@chakra-ui/react"
import { Header } from "./Header"


export const Layout = ({children}:any) => {
    return (
        <Box minHeight='100vh' backgroundColor="purple">
        <Header />
        {children}
        </Box>
    )
}