import * as React from "react";

import { Text, View } from "react-native";

export function Table(props) {
  const { header, data } = props;

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "stretch",
        flexDirection: "col",
        borderWidth: 1,
        alignItems: "center"
      }}
    >
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <Text>T1</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <Text>T1</Text>
        </View>
      </View>
    </View>
  );
}
