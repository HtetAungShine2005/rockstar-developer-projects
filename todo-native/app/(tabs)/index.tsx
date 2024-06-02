import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  // main: {
  //   height: '100%',
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#333",
  // },
  // content: {
  //   color: "white",
  //   fontSize: 40,
  // },

  header: {
    backgroundColor: "#559",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 21,
    color: "white",
  },
  inputGroup: {
    margin: 20,
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#559",
    borderRadius: 5,
  },
  input: {
    flexGrow: 1,
  },
  list: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
  itemText: {
    fontSize: 18,
  },
});

export default function Index() {
  return <View>
    <Text style={styles.header}>
      <Text style={styles.title}>Todo</Text>
    </Text>
    <View style={styles.inputGroup}>
      <TextInput style={styles.input} />
      <Button title="Add" />
    </View>
    <View style={styles.list}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item One</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item Two</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item Three</Text>
      </View>
    </View>
  </View>
}
