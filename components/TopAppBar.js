import * as React from 'react';
import {Appbar,} from "react-native-paper";

const TopAppBar = () => (
    <Appbar.Header>
        <Appbar.Content title="My music"/>
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
);

export default TopAppBar;