import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

interface Props {
  filmUrl: string;
}

interface FilmData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

const FilmCard: React.FC<Props> = ({ filmUrl }) => {
  const [filmData, setFilmData] = useState({} as FilmData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilm() {
      try {
        const res = await fetch(filmUrl);
        const data = await res.json();
        setFilmData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchFilm();
    // eslint-disable-next-line
  }, []);

  return (
    <View style={globalStyles.container}>
      {!loading && (
        <View style={styles.card}>
          <Text style={styles.subtitleText}>
            Star Wars: Episode {filmData.episode_id}
          </Text>
          <Text style={[styles.title, styles.centerText]}>
            {filmData.title}
          </Text>
          <Text style={[globalStyles.text, styles.centerText]}>
            {filmData.opening_crawl}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#282727",
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitleText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
  },
});

export default FilmCard;
