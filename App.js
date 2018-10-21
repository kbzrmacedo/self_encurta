import { createStackNavigator } from 'react-navigation';
import Home from './Components/Home/login';
import Car from './Components/Carro/car';
import Cadastro from './Components/Cadastro/cadastro';
import FormCadastro from './Components/Cadastro/formCadastro';
import FormLogin from './Components/Home/formLogin';


const App = createStackNavigator({
 Home: { screen: Home },
 FormLogin: { screen: FormLogin },
 Cadastro: { screen: Cadastro },
 FormCadastro: { screen: FormCadastro },
 Car: { screen: Car },

}, {
 headerMode: 'none',
})


export default App;

