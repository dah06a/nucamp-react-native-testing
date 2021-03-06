import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { MISSION_STATEMENT } from '../shared/missionStatement';

const Mission = (props) => {

    return (
        <Card title="Our Mission" wrapperStyle={{margin: 20}}>
            <Text>
                {MISSION_STATEMENT}
            </Text>
        </Card>
    );
}


export default Mission;
