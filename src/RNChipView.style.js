import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#dedede",
    height: 40,
    borderRadius: 40
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  subContentContainer: {
    maxWidth: 300,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8
  },
  avatarContainer: {
    overflow: "hidden",
    width: 40,
    height: 40,
    borderRadius: 40
  },
  actionContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 8,
    marginLeft: 8
  },
  actionIcon: {
    width: 12,
    height: 12
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5f5f5f"
  }
});

export default style;
