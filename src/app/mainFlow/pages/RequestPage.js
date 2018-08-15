import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { resetTimeOffRequestModel } from '../../../actions/timeOffFormActions';
import { Page, TimeOffRequestForm } from '../../../components';

class RequestPageComponent extends Component {
    componentWillMount() {
        this.props.resetTimeOffRequestModel();
    }

    render() {
        const { contentContainerStyle } = styles;

        return (
            <ScrollView>
                <Page title="Request Time Off">
                    <View style={contentContainerStyle}>
                        <TimeOffRequestForm editable />
                    </View>
                </Page>
            </ScrollView>
        );
    }
}

RequestPageComponent.propTypes = {
    resetTimeOffRequestModel: PropTypes.func,
};

const styles = {
    contentContainerStyle: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
    },
};

export const RequestPage = connect(null, { resetTimeOffRequestModel })(RequestPageComponent);
