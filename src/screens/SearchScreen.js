import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}

            <ScrollView>
                <SearchList results={filterResultsByPrice("$")} title="Cost Effective" />
                <SearchList results={filterResultsByPrice("$$")} title="Bit Pricier" />
                <SearchList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'
    }
});

export default SearchScreen;
