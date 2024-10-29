import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import { usersReducer } from "../reducers/usersReducer";

export const usersContext = createContext();
const UsersContextProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  const [users,dispatch]=useReducer(usersReducer ,[])
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({Ahmed:"AddAllUsers" ,nouran:res.data}));
  }, []);
  return <usersContext.Provider value={{users ,dispatch}}>{children}</usersContext.Provider>;
};

const styles = StyleSheet.create({});

export default UsersContextProvider;
