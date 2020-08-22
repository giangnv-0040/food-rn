import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const SearchList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name} | </Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SearchList;