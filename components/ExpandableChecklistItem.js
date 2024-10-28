import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ExpandableChecklistItem = ({ item, toggleCheck }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.row}>
                <BouncyCheckbox
                    isChecked={item.completed}
                    text={item.label}
                    fillColor='#005994'
                    unFillColor="#FFFFFF"
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={() => toggleCheck(item.id)}
                    style={styles.checkbox}
                />
                <TouchableOpacity
                    onPress={toggleExpand}
                    style={styles.iconTouchable}
                >
                    <Image
                        source={require('../assets/downarrowicon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            {expanded && (
                <View>
                    <Text style={styles.itemContent}>
                        {item.content}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    checkbox: {
        flex: 1, 
    },
    iconTouchable: {
        paddingLeft: 10, 
    },
    icon: {
        width: 30,
        height: 30, 
        resizeMode: 'contain',
    },
    itemContent: {
        marginTop: 10,
        fontSize: 14,
        color: "#666",
    },
});

export default ExpandableChecklistItem;
