import CreateStyledGlobal, {Background} from './styledGlobal';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Rota from './Rotas/Rota';



function App() {
  return (
    <>
    <CreateStyledGlobal/>
    <ChakraProvider >
    <Background>
      <Rota/>
    </Background>
    </ChakraProvider>
    </>
  );
}

export default App;