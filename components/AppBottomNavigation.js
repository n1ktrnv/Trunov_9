import * as React from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import MusicScreen from './MusicScreen'
import NewsScreen from './NewsScreen'

const MusicRoute = () => <MusicScreen />;

const NewsRoute = () => <NewsScreen />;

const AppBottomNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music' },
        { key: 'news', title: 'News', icon: 'playlist-music' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        news: NewsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default AppBottomNavigation;