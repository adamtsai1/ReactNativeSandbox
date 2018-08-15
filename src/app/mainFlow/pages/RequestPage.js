import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, View } from 'react-native';

// Components
import { Page, TimeOffRequestForm } from '../../../components';

export const RequestPage = () => {
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
};

RequestPage.propTypes = {
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
