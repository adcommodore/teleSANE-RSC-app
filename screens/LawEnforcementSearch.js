import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Linking } from 'react-native';

const policeData = require('../assets/police_department_contact_info_sorted.json');

const SearchablePoliceList = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(policeData);
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        setFilteredData(
            policeData.filter(item =>
                item.name.toLowerCase().includes(text.toLowerCase())
            )
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text
                style={styles.phoneText}
                onPress={() => Linking.openURL(`tel:${item.phone}`)}
            >
                Phone: {item.phone}
            </Text>
            <Text>Fax: {item.fax}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Police Department"
                value={search}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    searchBar: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
    },
    itemContainer: {
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 8,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    phoneText: {
        color: '#005994',
        textDecorationLine: 'underline',
    },
});

export default SearchablePoliceList;
