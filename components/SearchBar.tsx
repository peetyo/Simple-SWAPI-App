import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

type Props = {
  searchPeople: (endpoint: string) => void;
  clearSearchResults: () => void;
};
const SearchBar: React.FC<Props> = ({ searchPeople, clearSearchResults }) => {
  const [text, setText] = useState("");

  const onChange = (textValue: string) => setText(textValue);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search Character..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
            clearSearchResults();
            searchPeople(`http://swapi.dev/api/people/?search=${text}`);
            Keyboard.dismiss();
        }}
      >
        <Text style={styles.btnText}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    height: 50,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#282727",
    color: "white",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flex: 5,
  },
  btn: {
    backgroundColor: "#e8e8e8",
    padding: 8,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1,

    justifyContent: "center",
  },
  btnText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SearchBar;
