import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search key: {term}</Text>
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}

            <SearchList results={filterResultsByPrice("$")} title="1Cost Effective" />
            <SearchList results={filterResultsByPrice("$$")} title="Bit Pricier" />
            <SearchList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'
    }
});

export default SearchScreen;