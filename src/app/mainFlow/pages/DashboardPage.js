import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

// App
import { Colors } from '../../../utility';
import { CircleWithLabel, Page } from '../../../components';

export class DashboardPage extends Component {
    componentWillMount() {
    }

    render() {
        const { overviewContainerStyle } = styles;
        return (
            <Page title="Dashboard">
                <View style={overviewContainerStyle}>
                    <CircleWithLabel
                        circleColor={Colors.white}
                        circleText="11.0"
                        labelColor={Colors.yellow}
                        labelText="Used"
                    />

                    <CircleWithLabel
                        circleColor={Colors.yellow}
                        circleText="5.0"
                        labelColor={Colors.white}
                        labelText="Days Available"
                    />

                    <CircleWithLabel
                        circleColor={Colors.white}
                        circleText="8.5"
                        labelColor={Colors.yellow}
                        labelText="Accrued"
                    />
                </View>
            </Page>
        );
    }
}

DashboardPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    overviewContainerStyle: {
        backgroundColor: Colors.darkGray,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingTop: 10,
    },
};
