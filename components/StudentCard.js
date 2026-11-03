

import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

export default function StudentCard({
  id,
  name,
  year,
  flagged,
  onToggleFlag,
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const avatarColors = {
    s1: "#756B9D",
    s2: "#A39BC5",
    s3: "#D09200",
    s4: "#756B9D",
    s5: "#A39BC5",
  };

  const avatarColor = avatarColors[id] || "#756B9D";

  return (
    <View style={styles.card}>
      <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
        <Text style={styles.initials}>{initials}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable
        onPress={onToggleFlag}
        style={({ pressed }) => [
          styles.button,
          flagged && styles.flaggedButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[
          styles.buttonText,
          flagged && styles.flaggedText,
        ]}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCFBFF",
    borderWidth: 1.5,
    borderColor: "#E3E0EF",
    borderRadius: 21,
    padding: 14,
    marginHorizontal: 18,
    marginVertical: 7,
    minHeight: 104,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    marginLeft: 13,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#25243A",
  },
  year: {
    fontSize: 15,
    color: "#81799F",
    marginTop: 3,
  },
  button: {
    borderWidth: 1.5,
    borderColor: "#81799F",
    borderRadius: 25,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  flaggedButton: {
    backgroundColor: "#D09200",
    borderColor: "#D09200",
  },
  buttonText: {
    color: "#81799F",
    fontSize: 14,
    fontWeight: "bold",
  },
  flaggedText: {
    color: "#FFFFFF",
  },
  pressed: {
    opacity: 0.7,
  },
});
