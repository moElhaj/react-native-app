import React, { useState, useContext } from 'react';
import { Global } from '../context/Global';
import { Text, TouchableOpacity, View, RefreshControl, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import Stand from "../components/Stand";

export default function StandingsScreen({ navigation }) {

    const { standings } = useContext(Global);
    const formHandler = (text) => {
        let tempText = text.replace(/,|_/g, '');
        return [...tempText];
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <StatusBar
                    backgroundColor="#39003D"
                    barStyle="light-content"
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ width: "5%", fontWeight: "bold" }}>#</Text>
                    <Text style={{ width: "36%", fontWeight: "bold" }}>Name</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>MP</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>W</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>D</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>L</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>GD</Text>
                    <Text style={{ width: "7%", fontWeight: "bold" }}>Pts</Text>
                    <Text style={{ width: "17%", fontWeight: "bold" }}>Last 5</Text>
                </View>

                <View>
                    {standings.standings[0].table.length > 0 && standings.standings[0].table.map(stand => (
                        <Stand
                            key={stand.position}
                            position = {stand.position}
                            name={stand.team.name}
                            playedGames={stand.playedGames}
                            won={stand.won}
                            draw={stand.draw}
                            lost={stand.lost}
                            goalDifference={stand.goalDifference}
                            points={stand.points}
                            form={formHandler(stand.form)}
                        />
                    ))}
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    button: {
        width: 100,
        backgroundColor: '#39003D',
        color: '#FFF',
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 3,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20
    },
    whiteColor: {
        color: '#fff',
    }
});