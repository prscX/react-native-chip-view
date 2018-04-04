import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#F1F1F1"
  },
  small: {
    width: 200,
    height: 50,
    borderRadius: 50
  },
  medium: {
    width: 300,
    height: 50,
    borderRadius: 50
  },
  large: {
    width: 400,
    height: 50,
    borderRadius: 50
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subContentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10
  },
  avatarContainer: {
    overflow: "hidden"
  },
  avatarSmall: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  avatarMedium: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  avatarLarge: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  cancelableContainer: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: 'center'
  },
  cancelableSmall: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  cancelableMedium: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10
  },
  cancelableLarge: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  titleSmall: {},
  titleMedium: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#888888"
  },
  titleLarge: {}
});

export default style;
