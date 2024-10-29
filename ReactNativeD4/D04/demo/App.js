import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import DrawerNavigation from "./navigation/drawerNavigation";
import TobTabNavigation from "./navigation/TobTabNavigation";
import { StatusBar } from "expo-status-bar";


export default function App() {
  
  return (
    <>
    <NavigationContainer>
    <StackNavigation></StackNavigation>
    {/* <DrawerNavigation></DrawerNavigation> */}
    {/* <TobTabNavigation></TobTabNavigation> */}
    </NavigationContainer>
   <StatusBar hidden></StatusBar>
   </>
  );
}


