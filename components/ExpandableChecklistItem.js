import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ExpandableChecklistItem = ({ item, toggleCheck}) => {
    const [expanded, SetExpanded] = useState(false);

    const toggleExpand = () => {
        SetExpanded(!expanded);
    };

    return (
        <View style ={styles.itemContainer}>
            <TouchableOpacity
                onPress={toggleExpand}
                style={styles.itemTouchable}
            >
                <Text style={styles.itemTitle}>
                    {item.label}
                </Text>
            </TouchableOpacity>
            {expanded && (
                <View>
                    <Text style={styles.itemContent}>
                        {item.content}
                    </Text>
                </View>
            )}
            <BouncyCheckbox
                isChecked={item.completed}
                text={''}
                fillColor='#005994'
                unFillColor="#FFFFFF"
                innerIconStyle={{ borderWidth: 2 }}
                onPress={() => toggleCheck(item.id)}
                style={styles.checkbox}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "green",
        textAlign: "center",
    },
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
    },
    itemTouchable: {
        borderRadius: 10,
        overflow: "hidden",
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    itemContent: {
        marginTop: 10,
        fontSize: 14,
        color: "#666",
    },
    checkbox: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
});

export default ExpandableChecklistItem;