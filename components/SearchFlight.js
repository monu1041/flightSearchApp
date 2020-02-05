import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput, Modal, TouchableOpacity, Alert, Button } from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header'

class SearchFlight extends React.Component {

    render() {
        const { } = this.props;
        return (
            <Modal
                transparent={false}
                animationType="slide"
                visible={this.props.isModal}
                onRequestClose={this.props.onModalClose}
            >
                <Header back={"back"} title={"Destination"} goBack={this.props.onModalClose} iconName="ios-close" />
                <View style={styles.container}>

                    <TextInput

                        onChangeText={this.props.takeData}
                        value={this.text}
                        style={{ borderColor: 'grey', borderWidth: 1, height: 80, width: '80%', textAlign: 'center', fontSize: 50 }}
                        placeholder='e.g. DEL'
                        autoCapitalize="characters"

                    />


                    <FlatList
                        data={this.props.data}
                        keyExtractor={(x, i) => x.k}
                        renderItem={({ item }) =>
                            <View>
                                <TouchableOpacity onPress={() => this.props.selectAirport(item.k)}>
                                    <Card k={item.k} v={item.v} />
                                    <View style={{ height: 10 }}></View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

export default SearchFlight;