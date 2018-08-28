import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import { Page, TimeOffRequestForm } from '../../../components';

export class RequestPage extends Component {
    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.timeOffRequestForm.initializeDatePickers();
        });
    }

    render() {
        const { contentContainerStyle } = styles;
        return (
            <ScrollView>
                <Page title="Request Time Off">
                    <View style={contentContainerStyle}>
                        <TimeOffRequestForm
                            editable
                            ref={connectedComponent => { if (connectedComponent) this.timeOffRequestForm = connectedComponent.getWrappedInstance(); }}
                            onTimeOffRequestSaved={() => {
                                this.props.navigation.navigate({
                                    routeName: 'dashboard',
                                    params: {
                                        toast: 'Time off request submitted successfully.',
                                    },
                                });
                            }}
                        />
                    </View>
                </Page>
            </ScrollView>
        );
    }
}

RequestPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    contentContainerStyle: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
    },
};
