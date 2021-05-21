import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import dateFormat from 'dateformat';

export default function Match({ date, status, homeTeam, homeTeamResult, awayTeam, awayTeamResult }) {

    dateFormat.masks.gameTime = 'd mmmm - hh:MM';

    return (
        <View style={styles.match}>

            <View style={styles.info}>
                <Text style={styles.whiteColor}>{dateFormat(date, "gameTime")}</Text>
                <Text style={styles.whiteColor}>
                    {(() => {
                        switch (status) {
                            case "FINISHED": return "Finished";
                            case "SCHEDULED": return "Scheduled";
                            case "LIVE": return "Live";
                            case "IN_PLAY": return "Live";
                            case "PAUSED": return "Live";
                            case "POSTPONED": return "Postponed";
                            case "SUSPENDED": return "Suspended";
                            case "CANCELED": return "Canceled";
                            default: return "Scheduled";
                        }
                    })()}
                </Text>
            </View>

            <View style={styles.result}>
                <Text numberOfLines={1} style={{ width: "46%", fontSize: 18 }}>
                    {homeTeam.includes('FC') ? homeTeam.replace("FC", "") : homeTeam}
                </Text>
                <Text style={{ width: "3%", fontSize:18,  fontWeight: "bold", textAlign: "center" }}>
                    {homeTeamResult === null ? 0 : homeTeamResult}
                </Text>
                <Text style={{ width: "2%", textAlign: "center"}}>:</Text>
                <Text style={{ width: "3%", fontSize:18, fontWeight: "bold" , textAlign: "center"}}>
                    {awayTeamResult === null ? 0 : awayTeamResult}
                </Text>
                <Text numberOfLines={1} style={{ width: "46%", textAlign: "right", fontSize: 18 }}>
                    {awayTeam.includes('FC') ? awayTeam.replace("FC", "") : awayTeam}
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    match: {
        marginVertical: 15,
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 10
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    result: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});
