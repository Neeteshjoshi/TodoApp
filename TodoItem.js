import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color='red'/>
        <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  }
});
