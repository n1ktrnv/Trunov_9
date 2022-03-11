import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Card, Paragraph} from "react-native-paper";

import TopAppBar from './TopAppBar'

const Screen = () => (
    <View>
        <TopAppBar />
        <ScrollView style={{padding: 10}}>
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="Lil Durk’s New Album ‘7220’"/>
                    <Card.Content>
                        <Paragraph>Lil Durk returns today with 7220, his seventh studio album since arriving on the scene in the early 2010s. The LP—which shares its name with a 2021 memoir written by Durk’s mother, Lashawnda Woodard—was originally slated to drop on February 22, but the Chicago drill star pulled an audible and pushed the record back to March.</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => {}}>Show</Button>
                    </Card.Actions>
                </Card>
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="Rex Orange County Links Up With Tyler, The Creator On New Song “OPEN A WINDOW”"/>
                    <Card.Content>
                        <Paragraph>As promised, Rex Orange County teamed up with Tyler, the Creator on his new song, “OPEN A WINDOW,” which arrived yesterday. The U.K. singer-songwriter first teased the collaboration back in January, when he announced his new album, WHO CARES?, and revealed its tracklist.</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => {}}>Show</Button>
                    </Card.Actions>
                </Card>
                <Card style={{marginBottom: 100}}>
                    <Card.Title title="Benny The Butcher’s New Album ‘Tana Talk 4’"/>
                    <Card.Content>
                        <Paragraph>Buffalo rapper Benny the Butcher returns today with his third studio album and fourth installment of the critically acclaimed Tana Talk series, Tana Talk 4. The 12-track project was produced entirely by The Alchemist and Daringer, and it features the J. Cole-assisted single “Johnny P’s Caddy.” Elsewhere on the LP, Benny links up with Diddy and Griselda collaborators Westside Gunn and Conway the Machine, among others.</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => {}}>Show</Button>
                    </Card.Actions>
                </Card>
                <Button icon="link" mode="text" onPress={() => {}}>
                    More news
                </Button>
        </ScrollView>
    </View>
);

export default Screen;