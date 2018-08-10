import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// App
import { fetchPendingRequests, fetchUpcomingRequests } from '../../../actions/timeOffActions';
import {
    CircleWithLabel,
    Page,
    TimeOffList,
} from '../../../components';
import { Colors } from '../../../utility';

class DashboardPageComponent extends Component {
    componentWillMount() {
        this.props.fetchPendingRequests(1);
        this.props.fetchUpcomingRequests(1);
    }

    render() {
        const {
            listContainerStyle,
            overviewContainerStyle,
        } = styles;

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

                <View style={listContainerStyle}>
                    <TimeOffList
                        title="Pending Requests"
                        items={this.props.pendingRequests}
                    />
                </View>

                <View style={listContainerStyle}>
                    <TimeOffList
                        title="Upcoming Time Off"
                        items={this.props.upcomingRequests}
                    />
                </View>
            </Page>
        );
    }
}

DashboardPageComponent.propTypes = {
    // Properties
    pendingRequests: PropTypes.array,
    upcomingRequests: PropTypes.array,

    // Functions
    fetchPendingRequests: PropTypes.func,
    fetchUpcomingRequests: PropTypes.func,
};

const styles = {
    listContainerStyle: {
        marginBottom: 30,
    },
    overviewContainerStyle: {
        backgroundColor: Colors.darkGray,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingTop: 10,
    },
};

const mapStateToProps = (state) => ({
    pendingRequests: state.timeOff.pendingRequests,
    upcomingRequests: state.timeOff.upcomingRequests,
});

export const DashboardPage = connect(mapStateToProps, {
    fetchPendingRequests,
    fetchUpcomingRequests,
})(DashboardPageComponent);
