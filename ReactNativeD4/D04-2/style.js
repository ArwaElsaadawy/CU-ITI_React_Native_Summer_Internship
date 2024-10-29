import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: { padding:7,height:"100%"},
  view1: { backgroundColor: "rgb(0,0,255)", height: 100, width: 100 },
  view2: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  view3: { backgroundColor: "red", flex: 3, width: 70 },
  txt: { fontWeight: "bold", fontSize: 18, margin: 10,marginTop:20 },
  box: {
    marginBottom: 10,
    backgroundColor: "#2aa198",
    marginHorizontal: 10,
    borderRadius: 7,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  box1: {
    marginBottom: 10,
    backgroundColor: "#268bd2",
    marginHorizontal: 10,
    borderRadius: 7,
  },
  text1: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },

  box2: {
    marginBottom: 10,
    backgroundColor: "#d33682",
    marginHorizontal: 10,
    borderRadius: 7,
  },
  text2: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  box3: {
    marginBottom: 10,
    backgroundColor: "#cb4b16",
    marginHorizontal: 10,
    borderRadius: 7,
  },
  text3: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
headerStyle:{
    marginTop:30,backgroundColor:"steelblue" ,padding:15 ,color:"white" ,fontWeight:"bold" ,fontSize:20
},
itemStyle:{
    backgroundColor:"skyblue", padding:15 ,margin:5
}
});
