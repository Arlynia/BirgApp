import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "../Styles/TailsStyles.js";

export function TailsScreen({}) {
  const [tailsBook, setTailsBook] = useState(() => Array(16).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = (index) => {
    if (tailsBook[index] || calculateLines(tailsBook)) return;

    const newTailsBook = tailsBook.slice();
    newTailsBook[index] = isXNext ? "X" : "O";
    setTailsBook(newTailsBook);
    setIsXNext(!isXNext);
  };

  const calculateLines = (sticker) => {
    const stickers = [
      // row lines
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      // vertical lines
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      // diagonal lines
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];

    for (let sticker of stickers) {
      const [a, b, c, d] = sticker;
      if (
        sticker[a] &&
        sticker[a] === sticker[b] &&
        sticker[a] === sticker[c] &&
        sticker[a] === sticker[d]
      ) {
        return sticker[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setTailsBook(Array(16).fill(null));
    setIsXNext(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Chloe.png")}
        style={[styles.chloe, styles.transformImage]}
      ></Image>
      <Text style={styles.text}>Wondrous Tails Calculator</Text>
      <View style={styles.stickerBoard}>
        {tailsBook.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
}
