import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from "react-native";

import { TabView, TabBar } from "react-native-tab-view";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";

const fetchRandomPokemonId = async () => {
  const count = await fetch(pokemonURL)
    .then((response) => response.json())
    .then((data) => data.count);
  id = Math.floor(Math.random() * count) + 1;
  if (id > 898) {
    id = id + 9102;
  }
  return id;
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#8bd" }}
    style={{ backgroundColor: "#aef" }}
    renderLabel={({ route, focused, color }) => (
      <Text style={styles.title_tab}>{route.title}</Text>
    )}
  />
);

const PokemonRoute = ({ name, sprite, types, changePokemon, locations }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{capitalize(name)}</Text>
      <Image style={styles.pfp} source={{ uri: sprite }} />
      <Text style={styles.heading}>Types:</Text>
      <FlatList
        style={styles.list}
        data={types}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.body}>
            {"\t\t"}
            {item.type.name}
          </Text>
        )}
      />
      <Text style={({ paddingTop: 15 }, styles.heading)}>Locations:</Text>
      <FlatList
        style={styles.list}
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.body}>
            {"\t\t"}
            {item.location_area.name}
          </Text>
        )}
      />
      <TouchableOpacity
        style={styles.butt}
        onPress={
          changePokemon
          // .then(() => {
          //   console.log("Url + Id: " + pokemonURL + id);
          //   setUrl(pokemonURL + id);
          //   console.log("Url after change: " + url);
          // });
        }
      >
        <Text style={styles.butt_text}>See New Pokemon</Text>
      </TouchableOpacity>
    </View>
  );
};

const AbilitiesRoute = ({ abilities }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={abilities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.body}>
            {"\t\t"}
            {item.ability.name} {item.is_hidden ? "(hidden)" : ""}
          </Text>
        )}
      />
    </View>
  );
};
const MovesRoute = ({ moves }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={moves}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.body}>
            {"\t\t"}
            {item.move.name}
          </Text>
        )}
      />
    </View>
  );
};
const StatsRoute = ({ stats }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={stats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.body}>
            {"\t\t"}
            {item.stat.name}: {item.base_stat}
          </Text>
        )}
      />
    </View>
  );
};
const TypesRoute = ({ types }) => {};

const PokemonTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "pokemon", title: "Pokemon" },
    { key: "abilities", title: "Abilities" },
    { key: "stats", title: "Stats" },
    { key: "moves", title: "Moves" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "pokemon":
        return (
          <PokemonRoute
            name={name}
            sprite={sprite}
            types={types}
            locations={locations}
            changePokemon={changePokemon}
          />
        );
      case "abilities":
        return <AbilitiesRoute abilities={abilities} />;
      case "stats":
        return <StatsRoute stats={stats} />;
      case "moves":
        return <MovesRoute moves={moves} />;
      default:
        return null;
    }
  };

  const [isLoading, setLoading] = useState(true);
  const [url, setUrl] = useState(pokemonURL + 1);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [name, setName] = useState([]);
  const [sprite, setSprite] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  const changePokemon = async () => {
    await fetchRandomPokemonId().then((randId) => setUrl(pokemonURL + randId));
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setAbilities(json.abilities);
        setMoves(json.moves);
        setName(json.name);
        setSprite(json.sprites.front_default);
        setStats(json.stats); // json.stats[i].stat.name  // json.stats[i].base_stat
        setTypes(json.types); // json.types[i].type.name
        fetch(json.location_area_encounters)
          .then((response) => response.json())
          .then((json) => setLocations(json)); // json.types[i].type.name
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [url]);
  console.log(url);
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
      style={styles.outermost_container}
      renderTabBar={renderTabBar}
      swipeEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: "#fff",
    backgroundColor: "#213",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    // marginTop: 10
  },
  outermost_container: {
    // flex: 1,
    color: "#aef",
    backgroundColor: "#213",
    // alignItems: "center",
    justifyContent: "center",
    // padding: 15,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    minHeight: 35,
    // alignSelf: "flex-start",
    padding: 5,
  },
  pfp: {
    width: 230,
    height: 230,
  },
  title: {
    color: "#aef",
    fontWeight: "bold",
    fontSize: 28,
    padding: 5,
    alignSelf: "center",
  },
  title_tab: {
    color: "#213",
    fontWeight: "bold",
    fontSize: 14,
    padding: 5,
    alignSelf: "center",
  },
  heading: {
    color: "#aef",
    fontWeight: "bold",
    fontSize: 22,
    padding: 2,
    alignSelf: "center",
  },
  body: {
    color: "#aef",
    fontWeight: "normal",
    fontSize: 22,
    padding: 1,
    alignSelf: "flex-start",
  },
  butt: {
    borderRadius: 10,
    backgroundColor: "#aef",
    padding: 10,
    margin: 15,
  },
  butt_text: {
    color: "#213",
    fontWeight: "normal",
    fontSize: 20,
    // padding: 1,
    // alignSelf: "flex-start",
  },
});

export default PokemonTab;
