import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import DrawerNavigation from "./navigation/drawerNavigation";
import TobTabNavigation from "./navigation/TobTabNavigation";
import { StatusBar } from "expo-status-bar";
import UsersContextProvider from "./contexts/usersContextProvider";

export default function App() {
  return (
    <>
      <UsersContextProvider>
        <NavigationContainer>
          <StackNavigation></StackNavigation>
          {/* <DrawerNavigation></DrawerNavigation> */}
          {/* <TobTabNavigation></TobTabNavigation> */}
        </NavigationContainer>
      </UsersContextProvider>
      <StatusBar hidden></StatusBar>
    </>
  );
}
