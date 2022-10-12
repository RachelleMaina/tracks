import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import { Text  } from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, navText, routeName }) => {
  return (
   <Spacer>
        <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
          <Text style={styles.link}>{navText}</Text>
        </TouchableOpacity>
        </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
export default withNavigation(NavLink);
