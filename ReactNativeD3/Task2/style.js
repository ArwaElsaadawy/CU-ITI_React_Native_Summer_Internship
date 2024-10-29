import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#cfe1b9",
    padding: 10,
    color: "#213A57",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemStyle: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  separator: {
    height: 10,
    backgroundColor: "#f0f0f0",
  },
});

export default styles;
