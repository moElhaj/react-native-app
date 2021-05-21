import React, { useState, useEffect, useContext } from 'react';
import { Global } from '../context/Global';
import { Text, TouchableOpacity, View, RefreshControl, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import Match from "../components/Match";

export default function MatchesScreen({ navigation }) {

    const { matches } = useContext(Global);

    useEffect(() => {

    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <StatusBar
                    backgroundColor="#39003D"
                    barStyle="light-content"
                />

                <View>
                    {matches.matches.length > 0 && matches.matches.map(match => (
                        <Match
                            id={match.status}
                            key={match.id}
                            date={match.utcDate}
                            status={match.status}
                            homeTeam={match.homeTeam.name}
                            homeTeamResult={match.score.fullTime.homeTeam}
                            awayTeam={match.awayTeam.name}
                            awayTeamResult={match.score.fullTime.awayTeam}
                        />
                    ))}
                </View>
                <View>
                    {matches.matches.length === 0 && <Text style={{ color: "#fff" }}>No Scheduled Matches</Text>}
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
        alignItems: 'center'
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
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20
    }
});