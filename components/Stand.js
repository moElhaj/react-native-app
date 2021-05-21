import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Stand({ position, name, playedGames, won, draw, lost, goalDifference, points, form }) {

    return (
        <View style={styles.row}>
            <Text style={{width: "5%"}}>{position}</Text>
            <Text numberOfLines={1} style={{ width: "36%" }}>
                {name.includes('FC') ? name.replace("FC", "") : name}
            </Text>
            <Text style={{ width: "7%" }}>{playedGames}</Text>
            <Text style={{ width: "7%" }}>{won}</Text>
            <Text style={{ width: "7%" }}>{draw}</Text>
            <Text style={{ width: "7%" }}>{lost}</Text>
            <Text style={{ width: "7%" }}>{goalDifference}</Text>
            <Text style={{ width: "7%" }}>{points}</Text>
            <View style={{ width: "17%", flexDirection: "row", alignItems: "center" }}>
                {form.map((letter, index) => (
                    (() => {
                        switch (letter) {
                            case "W": return <AntDesign key={index} name="checkcircle" size={10} color="#5ed62f" style={{marginRight: 2}} />;
                            case "L": return <AntDesign key={index} name="closecircle" size={10} color="#FF015B" style={{marginRight: 2}} />;
                            case "D": return <AntDesign key={index} name="minuscircle" size={10} color="gray" style={{marginRight: 2}} />;
                        }
                    })()
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 10
    }
});
