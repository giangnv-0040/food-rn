import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
            <Text>This is Search screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;