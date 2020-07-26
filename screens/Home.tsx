import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

import { globalStyles } from "../styles/global";

import PersonCard from "../components/PersonCard";

import { connect } from "react-redux";
import { AppState } from "../state/index";
import { getPeople } from "../state/people/actions";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeNavigationProp;
  getPeople: (endpoint: string) => void;
  clearSearchResults: () => void;
} & ReturnType<typeof mapStateToProps>;

const Home: React.FC<Props> = ({
  navigation,
  people: { list, peopleLoading, next },
  getPeople,
}) => {
  
  useEffect(() => {
    if (list.length === 0) {
      getPeople(next);
    }
    // eslint-disable-next-line
  }, []);

  const loadMore = () => {
    
    if (!peopleLoading && next !== null) {
      getPeople(next);
    }
  };

  const renderListFooter = () => {
    if(list.length === 0 && peopleLoading=== false){
      return <Text style={styles.flatListFooter}> No Results </Text>
    }else{
      return next === null ? (
        <Text style={styles.flatListFooter}> End of Results </Text>
      ) : (
        <Text style={styles.flatListFooter}> Loading... </Text>
      );
    }
  };

  return (
    <View style={globalStyles.screenWrapper}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Films", item.films)}
          >
            <PersonCard person={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={globalStyles.flatListStyle}
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
        ListFooterComponent={renderListFooter}
      />
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  people: state.people,
});

export default connect(mapStateToProps, {
  getPeople,
})(Home);

const styles = StyleSheet.create({
  flatListFooter: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    paddingBottom: 10
  },
});
