import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/home';
import Cadastro from './telas/cadastro';
import Carrinho from './telas/carrinho';
import Catego from './telas/categoria';
import Compra from './telas/compra';
import Listaprodu from './telas/listaproduto';
import Login from './telas/login';
import Produt from './telas/produto';
import Avalia from './telas/avaliacao';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
<NavigationContainer>
  <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Home',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>



        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Tela Cadastro',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
       </Stack.Screen>
  


        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            title: 'Tela Carrinho',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
       </Stack.Screen>

        <Stack.Screen
          name="Catego"
          component={Catego}
          options={{
            title: 'Tela Categoria',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="Compra"
          component={Compra}
          options={{
            title: 'Tela de Compra',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="Listaprodu"
          component={Listaprodu}
          options={{
            title: 'Tela Lista de Produto',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Tela Login',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: true         
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="Produt"
          component={Produt}
          options={{
            title: 'Tela Produto',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="Avalia"
          component={Avalia}
          options={{
            title: 'Tela Avaliação',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}>
        </Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
  );
}
