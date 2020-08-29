import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScree = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const showDetail = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);

        } catch (err) {
            console.log(err);
            console.log('ResultsShowScreen');
        }
    };

    useEffect(() => {
        showDetail(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>
                {result.name}
            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={style.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScree;
