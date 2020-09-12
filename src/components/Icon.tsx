import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export interface IIconProps {
  disabled?: boolean;
  iconID: string;
  text: string;
}

export function Icon(props: IIconProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={props.iconID}
        size={30}
        color={props.disabled ? "grey" : "white"}
      />
      <Text style={[styles.text, props.disabled && { color: "grey" }]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
