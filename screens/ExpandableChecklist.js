import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ExpandableChecklistItem from '../components/ExpandableChecklistItem';

const ExpandableChecklist = () => {
    const [checklist, setChecklist] = useState([
        { 
            id: 1, 
            label: 'Call Toxicology Kit Alert Line (if applicable)', 
            content: (
                <View>
                    <Text>If a toxicology kit was complete AND patient did NOT report to the police, </Text>
                    <Text style={{ fontWeight: 'bold' }}>call </Text>
                    <Text style={{ color: '#005994', textDecorationLine: 'underline' }}>1-877-794-0432</Text>
                    <Text>.</Text>
                    <Text>{"\n"}Leave a message with the following information:</Text>
                    <Text>{"\n"}\u2022 Toxicology kit # (example: MAT99999)</Text>
                    <Text>{"\n"}\u2022 Date of specimen collection</Text>
                    <Text>{"\n"}\u2022 Name of hospital where toxicology kit was administered</Text>
                    <Text>{"\n"}\u2022 City/town where the incident occurred</Text>
                </View>
            ),
            completed: false 
        },
        { 
            id: 2, 
            label: 'Complete Evidence Collection Kit', 
            content: (
                <View>
                    <Text>Maintain chain of custody (do not leave kit unattended).</Text>
                    <Text>{"\n"}Seal kit with provided stickers.</Text>
                    <Text>{"\n"}Contact </Text>
                    <Text style={{ color: '#005994', textDecorationLine: 'underline' }}>Law Enforcement</Text>
                    <Text>where the incident occurred to let them know there is a kit that needs to be picked up, and </Text>
                    <Text style={{ fontWeight: 'bold' }}>ask for their fax number</Text>
                    <Text> (you will need this for Form 2A).</Text>
                    <Text>{"\n"}Place in locked refrigerator in the Emergency Department.</Text>
                    <Text>{"\n"}Log kit into refrigerator logbook.</Text>
                    <Text>{"\n"}Enter kit into Track-Kit: </Text>
                    <Text style={{ color: '#005994', textDecorationLine: 'underline' }}>https://ma.track-kit.us/login</Text>
                </View>
            ),
            completed: false 
        },
        { 
            id: 3, 
            label: 'Fax Form 2A Provider Sexual Crime Report (PSCR)', 
            content: (
                <View>
                    <Text>
                        Fax Form 2A to Executive Office of Public 
                        Safety and Security (EOPSS) AND Law Enforcement.
                    </Text>
                    <Text tyle={{ fontWeight: 'bold' }}>
                        {"\n"}617-725-0260  OR  pscr@mass.gov
                    </Text>
                    <Text style={{ color: '#005994', textDecorationLine: 'underline' }}>{"\n"}Law Enforcement Phones By City/Town</Text>
                </View>
            ),
            completed: false 
        },
        { 
            id: 4, 
            label: 'Complete Mandated Reports (if applicable)', 
            content: (
                <View>
                    <Text>
                        Fax Form 2A to Executive Office of Public 
                        Safety and Security (EOPSS) AND Law Enforcement.
                    </Text>
                    <Text tyle={{ fontWeight: 'bold' }}>
                        {"\n"}617-725-0260  OR  pscr@mass.gov
                    </Text>
                    <Text style={{ color: '#005994', textDecorationLine: 'underline' }}>{"\n"}Law Enforcement Phones By City/Town</Text>
                </View>
            ),
            completed: false 
        },
        { 
            id: 5, 
            label: 'Put Medical-Forensic Records in designated areas', 
            content: (
                <View>
                    <Text>
                    Place Medical-Forensic Records, Quality Assurance 
                    copies and Secure Digital (SD) card in manilla 
                    envelope in designated locked area
                    </Text>
                </View>
            ),
            completed: false },
    ]);
    
    const toggleCheck = (id) => {
        const updatedChecklist = checklist.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setChecklist(updatedChecklist);
    };

    const renderItem = ({ item }) => (
        <ExpandableChecklistItem item={item} toggleCheck={toggleCheck} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Post Exam Checklist</Text>
            <FlatList
                data={checklist}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
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
    
export default ExpandableChecklist;
