import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Button, List} from "react-native-paper";

import TopAppBar from './TopAppBar'

const MusicScreen = () => (
    <View>
        <TopAppBar />
        <ScrollView style={{padding: 10}}>
            <List.Item
                title="Stay"
                description="Justin Biber"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <List.Item
                title="Zeit"
                description="Rammstein"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <List.Item
                title="showdown"
                description="shadowraze"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <List.Item
                title="Golden Child"
                description="Lil Durk"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <List.Item
                title="What Happened To Virgil"
                description="Lil Durk"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <List.Item
                title="Bones"
                description="Imagine Dragons"
                left={props => <List.Icon {...props} icon="music" />}
                onPress={() => {}}
            />
            <Button icon="link" mode="text" onPress={() => {}}>
                More music
            </Button>
        </ScrollView>
    </View>
);

export default MusicScreen;