import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { useContext, useState } from "react";
import { login } from "../Services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../Services/storage";

const Home = () => {

const [ email, setEmail ] = useState<string>('')
const { setIsLoggedIn } = useContext(AppContext)
const navigate = useNavigate()

const validateUser = async (email: string )  => {
  const loggedIn = await login(email)

  if(!loggedIn) {
    return alert('email invalido')
  }
  setIsLoggedIn(true)
  changeLocalStorage({login: true})
  navigate('/conta/1')
}

    return (
              <Box padding='15px'>
                <Card>
                  <Center>
                      <h1>Faça o login</h1>
                  </Center>
                     <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                     <Input placeholder="password" />
                  <Center>
               <DButton
              onClick={() => validateUser(email)}/>
              </Center>
                </Card>
              </Box>
          
    )
}

export default Home ;