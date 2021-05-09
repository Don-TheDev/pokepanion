import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import PokemonTab from "./PokemonTab";

const App = () => {
  return (
    <PokemonTab />
    // <SafeAreaView style={styles.container}>
    //   {isLoading ? (
    //     <ActivityIndicator />
    //   ) : (
    //     <View style={styles.container}>
    //       <Text style={styles.title}>{name}</Text>
    //       <Image style={styles.pfp} source={{ uri: sprite }} />
    //       <Text style={styles.heading}>Types:</Text>
    //       <FlatList
    //         style={styles.list}
    //         data={types}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => (
    //           <Text style={styles.body}>
    //             {"\t\t"}
    //             {item.type.name}
    //           </Text>
    //         )}
    //       />
    //       {/* <Text style={styles.heading}>Abilities:</Text>
    //       <FlatList
    //         style={styles.list}
    //         data={abilities}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => (
    //           <Text style={styles.body}>
    //             {"\t\t"}
    //             {item.ability.name}
    //           </Text>
    //         )}
    //       />
    //       <Text style={styles.heading}>Stats:</Text>
    //       <FlatList
    //         style={styles.list}
    //         data={stats}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => (
    //           <Text style={styles.body}>
    //             {"\t\t"}
    //             {item.stat.name}: {item.base_stat}
    //           </Text>
    //         )}
    //       />
    //       <Text style={styles.heading}>Moves:</Text>
    //       <FlatList
    //         style={styles.list}
    //         data={moves}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => (
    //           <Text style={styles.body}>
    //             {"\t\t"}
    //             {item.move.name}
    //           </Text>
    //         )}
    //       /> */}
    //       <TouchableOpacity
    //         style={styles.butt}
    //         onPress={async () => {
    //           await fetchRandomPokemonId().then((randId) =>
    //             setUrl(pokemonURL + randId)
    //           );
    //           // .then(() => {
    //           //   console.log("Url + Id: " + pokemonURL + id);
    //           //   setUrl(pokemonURL + id);
    //           //   console.log("Url after change: " + url);
    //           // });
    //         }}
    //       >
    //         <Text style={styles.butt_text}>See New Pokemon</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )}
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: "#fff",
    backgroundColor: "#213",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  list: {
    maxHeight: 78,
    alignSelf: "flex-start",
    // padding: 2,
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
  heading: {
    color: "#aef",
    fontWeight: "bold",
    fontSize: 16,
    padding: 2,
    alignSelf: "flex-start",
  },
  body: {
    color: "#aef",
    fontWeight: "normal",
    fontSize: 18,
    // padding: 1,
    alignSelf: "flex-start",
  },
  butt: {
    borderRadius: 10,
    backgroundColor: "#aef",
    padding: 10,
    margin: 10,
  },
  butt_text: {
    color: "#213",
    fontWeight: "normal",
    fontSize: 16,
    // padding: 1,
    // alignSelf: "flex-start",
  },
});

export default App;
