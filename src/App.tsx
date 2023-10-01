import { Center,Box, ChakraProvider, Input, Button } from '@chakra-ui/react'
import { login } from './Services/login';
import { Layout } from './components/Layout';



function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Box minHeight='100vh' backgroundColor='#850FDD' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o login</h1>
            </Center>
          <Input placeholder='email' /> 
          <Input placeholder='password' />
          <Center>
          <Button onClick={login} marginTop ='10px' colorScheme='purple' width='100%'>Login</Button>
          </Center> 
        </Box>
      </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
