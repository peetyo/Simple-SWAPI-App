import React from "react";
import {  View, FlatList, Text } from "react-native";
import { globalStyles } from '../styles/global';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'

import FilmCard from '../components/FilmCard'
type FilmsRouteProp = RouteProp<
  RootStackParamList,
  'Films'
>;

type Props = {
  route: FilmsRouteProp;
};
const Films: React.FC<Props> = ({ route }) => {
  
  const films = route.params;

  return (
    <View style={globalStyles.screenWrapper}>
      <FlatList
        data={films}
        renderItem={({ item }) => (
        <FilmCard filmUrl={item}/>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={globalStyles.flatListStyle}
      />
    </View>
  );
};

export default Films;