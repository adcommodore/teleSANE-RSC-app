import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Alert } from 'react-native';
import ExpandableChecklistItem from '../components/ExpandableChecklistItem';
import { useNavigation } from '@react-navigation/native';

const ExpandableChecklist = () => {
    const navigation = useNavigation();

    const [checklist, setChecklist] = useState([
        { 
            id: 1, 
            label: 'Call Toxicology Kit Alert Line (if applicable)', 
            content: (
                <Text style={styles.itemContent}>
                    If a toxicology kit was complete AND patient did NOT report to the police,{" "}
                    <Text style={{ fontWeight: 'bold' }}>call </Text>
                    <Text 
                        style={styles.link}
                        onPress={() => {
                            Linking.canOpenURL('tel:1-877-794-0432')
                                .then((supported) => {
                                    if (supported) {
                                        Linking.openURL('tel:1-877-794-0432');
                                    } else {
                                        Alert.alert("Error", "Your device doesn't support this feature.");
                                    }
                                })
                                .catch((err) => Alert.alert("An error occurred", err.message));
                        }}
                    >
                        1-877-794-0432
                    </Text>.
                    {"\n\n"}• Toxicology kit # (example: MAT99999)
                    {"\n"}• Date of specimen collection
                    {"\n"}• Name of hospital where toxicology kit was administered
                    {"\n"}• City/town where the incident occurred
                </Text>
            ),
            completed: false 
        },
        { 
            id: 2, 
            label: 'Complete Evidence Collection Kit', 
            content: (
                <Text style={styles.itemContent}>
                    Maintain chain of custody (do not leave kit unattended).
                    {"\n\n"}Seal kit with provided stickers.
                    {"\n\n"}Contact{" "}
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('LawEnforcementSearch')}
                    >
                        Law Enforcement
                    </Text>{" "}
                    where the incident occurred to let them know there is a kit that needs to be picked up, and{" "}
                    <Text style={{ fontWeight: 'bold' }}>ask for their fax number</Text> (you will need this for Form 2A).
                    {"\n\n"}Place in locked refrigerator in the Emergency Department.
                    {"\n\n"}Log kit into refrigerator logbook.
                    {"\n\n"}Enter kit into Track-Kit:{" "}
                    <Text 
                        style={styles.link}
                        onPress={() => {
                            Linking.canOpenURL('https://ma.track-kit.us/login')
                                .then((supported) => {
                                    if (supported) {
                                        Linking.openURL('https://ma.track-kit.us/login');
                                    } else {
                                        console.log("Don't know how to open URI: " + 'https://ma.track-kit.us/login');
                                    }
                                })
                                .catch((err) => console.error('An error occurred', err));
                        }}
                    >
                        https://ma.track-kit.us/login
                    </Text>
                </Text>
            ),
            completed: false 
        },
        { 
            id: 3, 
            label: 'Fax Form 2A Provider Sexual Crime Report (PSCR)', 
            content: (
                <Text>
                    <Text>
                        Fax Form 2A to Executive Office of Public 
                        Safety and Security (EOPSS) AND{" "}
                        <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('LawEnforcementSearch')}
                        >
                            Law Enforcement
                        </Text>{"."}
                    </Text>
                    <Text tyle={{ fontWeight: 'bold' }}>
                        {"\n\n"}EOPSS: 617-725-0260  OR  pscr@mass.gov
                    </Text>
                    
                </Text>
            ),
            completed: false 
        },
        { 
            id: 4, 
            label: 'Complete Mandated Reports (if applicable)', 
            content: (
                <View style={styles.mandatoryReportContainer}>
                    <Text>
                        <Text style={styles.title}>{"\n"}51A</Text>
                        <Text style={styles.description}>
                            {"\n\n"}Patient(s) 17 years old and younger
                            {"\n\n"} Call{" "}
                        </Text>
                        <Text style={styles.link}
                            onPress={() => {
                                Linking.canOpenURL('tel: 1-800-792-52002')
                                    .then((supported) => {
                                        if (supported) {
                                            Linking.openURL('tel: 1-800-792-5200');
                                        } else {
                                            Alert.alert("Error", "Your device doesn't support this feature.");
                                        }
                                    })
                                    .catch((err) => Alert.alert("An error occurred", err.message));
                            }}
                        >
                            1-800-792-5200
                        </Text>
                        <Text 
                            style={styles.link}
                            onPress={() => Linking.openURL('https://example.com/51a-report')}
                        >
                            {"\n\n"}Submit A Written Report
                        </Text>
                    </Text>

                    <Text style={styles.divider} />

                    <Text>
                        <Text style={styles.title}>19A</Text>
                        <Text style={styles.description}>
                            {"\n\n"}Patient(s) 60 years old and older
                            {"\n\n"}Call{" "}
                        </Text>
                        <Text 
                            style={styles.link}
                            onPress={() => Linking.openURL('tel:1-800-922-2275')}
                        >
                            1-800-922-2275
                        </Text>
                        <Text 
                            style={styles.link}
                            onPress={() => Linking.openURL('https://example.com/19a-report')}
                        >
                            {"\n\n"}Submit A Written Report
                        </Text>
                    </Text>

                    <Text style={styles.divider} />

                    <Text>
                        <Text style={styles.title}>19C</Text>
                        <Text style={styles.description}>
                            {"\n\n"}Patient with disabilities 18-59 year old.
                            {"\n\n"}Call{" "}
                        </Text>
                        <Text 
                            style={styles.link}
                            onPress={() => Linking.openURL('tel:1-800-426-9009')}
                        >
                            1-800-426-9009
                        </Text>
                        <Text 
                            style={styles.link}
                            onPress={() => Linking.openURL('https://example.com/19c-report')}
                        >
                            {"\n\n"}Submit A Written Report
                            {"\n\n"}
                        </Text>
                    </Text>
                </View>
            ),
            completed: false 
        },
        { 
            id: 5, 
            label: 'Put Medical-Forensic Records in designated areas', 
            content: (
                <Text>
                    <Text>
                    Place Medical-Forensic Records, Quality Assurance 
                    copies and Secure Digital (SD) card in manilla 
                    envelope in designated locked area.
                    </Text>
                </Text>
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
        color: "#005994",
        textAlign: "center",
    },
    mandatoryReportContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ddd',
        textAlign: 'center',
        alignSelf: 'stretch', // Make container expand to full width of parent
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: "#333",
        marginBottom: 8,
    },
    link: {
        color: "#005994",
        textDecorationLine: "underline",
        textAlign: 'center',
        marginBottom: 5,
    },
    divider: {
        width: '80%',
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 10,
        alignSelf: 'center',
    },
});

export default ExpandableChecklist;
