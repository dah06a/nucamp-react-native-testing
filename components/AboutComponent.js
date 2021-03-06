import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Mission from './MissionComponent';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: {uri: baseUrl + item.image} }}
                />
            );
        };

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card title="Community Partners" wrapperStyle={{margin: 20}}>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <Mission />
                        <Card title="Community Partners" wrapperStyle={{margin: 20}}>
                            <Text>{this.props.partners.errMess}</Text>
                        </Card>
                    </Animatable.View>

                </ScrollView>
            );
        }

        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    <Card title="Community Partners" wrapperStyle={{margin: 20}}>
                        <FlatList
                            data={this.props.partners.partners}
                            renderItem={renderPartner}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                    </Animatable.View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);
