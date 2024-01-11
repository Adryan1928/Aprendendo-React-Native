import { Confimation } from './src/pages/Confirmation';
import { MyPlants } from './src/pages/MyPlants';
import { PlantSelect } from './src/pages/PlantSelect';
import { UserIdentification } from './src/pages/UserIdentification';
import { Welcome } from './src/pages/Welcome';
import Routes from './src/routes';


// import {
//   useFonts,
//   Jost_400Regular,
//   Jost_600SemiBold
// } from '@expo-google-fonts/jost';
  
export default function App() {
//   const [ fontsLoaded ] = useFonts({
//     Jost_400Regular,
//     Jost_600SemiBold
//   })

  // if (!fontsLoaded)
  //   return <AppLoading />

  return (
    <Routes/>
    // <MyPlants/>
    // <PlantSelect />
    // <UserIdentification />
    // <Welcome />
  );
}


