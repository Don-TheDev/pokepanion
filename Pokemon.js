// import React from "react";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// import { StatusBar } from "expo-status-bar";

// export default PokemonCard;

// const GetRequest = (url) => {
//   fetch(url, {
//     method: "get",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       firstParam: "yourValue",
//       secondParam: "yourOtherValue",
//     }),
//   });
// };
// function getPokemonFromUrl(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => renderPokemon(data))
//     .catch((error) => console.error(error));
// }

// function getRandomPokemon() {
//   getPokemonFromUrl(pokemonUrl)
//     .then((data) => {
//       const num = Math.random(data["count"]) + 1;
//       return num;
//     })
//     .then((num) => getPokemonFromUrl(pokemonUrl));
// }

// function renderPokemon(data) {
//   return (
//     <View style={styles.container}>
//       <Text>{data}</Text>
//       <Button onClick={getRandomPokemon()} title="See another pokemon!" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// function displayPokemon() {
//   const [pokemon, setPokemon] = useState(getRandomPokemon());
//   return (
//     <ScrollView>
//       <Text>{pokemon.name}</Text>
//       <Image url={pokemon.sprites.front_default} />
//       <Image url={pokemon.sprites.front_shiny} />
//       <Text>Abilities:</Text>
//       {pokemon.abilities.map((ability, index) => (
//         <Text key={index}>
//           {"\t"}
//           {ability.ability.name}
//         </Text>
//       ))}
//       <ScrollView>
//         <Text>Moves:</Text>
//         {pokemon.moves.map((move, index) => (
//           <Text key={index}>
//             {"\t"}
//             {move.move.name}
//           </Text>
//         ))}
//       </ScrollView>
//       <ScrollView>
//         <Text>Base Stats:</Text>
//         {pokemon.stats.map((stat, index) => (
//           <Text key={index}>
//             {"\t"}
//             {stat.stat.name}: {stat.base_stat}
//           </Text>
//         ))}
//       </ScrollView>
//       <Button onClick={() => setPokemon(getRandomPokemon())} />
//       <StatusBar style="auto" />
//     </ScrollView>
//   );
// }

// async function getRandomPokemon() {
//   const size = await getNumOfPokemon();
//   num = Math.random(size) + 1;
//   const promise = await fetch(pokemonUrl + num);
//   const data = promise.json();
//   return data;
// }

// async function getNumOfPokemon() {
//   const promise = await fetch(pokemonUrl);
//   const data = await promise.json();
//   return data.count;
// }

// export default PokemonView;
