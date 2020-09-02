import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Menu, IconButton } from "react-native-paper";
import { deleteNote } from "../components/useLearnNotes";

const LearnNotes = ({ item, formatTime, seek, refresh, id, edit }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View key={item.note} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginHorizontal: 10,
            textDecorationLine: "underline",
            color: "#03a9f4",
          }}
          onPress={() => seek(item.time)}
        >
          {`@${formatTime(item.time)}`}
        </Text>
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 5,
            fontFamily: "Raleway-Regular",
          }}
        >
          {item.note}
        </Text>
      </View>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <IconButton onPress={openMenu} icon="dots-horizontal" size={16} />
        }
      >
        <Menu.Item
          onPress={() => {
            edit(item);
            closeMenu();
          }}
          title="Edit"
        />
        <Menu.Item
          onPress={async () => {
            await deleteNote(id, item);
            await refresh();
            closeMenu();
          }}
          title="Delete"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#ecf0f1",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LearnNotes;
