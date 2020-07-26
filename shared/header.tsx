import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/star-wars-logo-small.png")}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerImage: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
});

export default Header;
