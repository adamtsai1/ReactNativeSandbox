import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { resetTimeOffRequestModel } from '../../../actions/timeOffFormActions';
import { Button, Page, TimeOffRequestForm } from '../../../components';

class RequestPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            submitButtonEnabled: false,
        };

        this.setSubmitButtonEnabled = this.setSubmitButtonEnabled.bind(this);
    }

    componentWillMount() {
        this.props.resetTimeOffRequestModel();
    }

    setSubmitButtonEnabled(params) {
        this.setState({ submitButtonEnabled: params.valid });
    }

    render() {
        const { contentContainerStyle } = styles;

        return (
            <ScrollView>
                <Page title="Request Time Off">
                    <View style={contentContainerStyle}>
                        <TimeOffRequestForm
                            editable
                            onFormChange={this.setSubmitButtonEnabled}
                        />
                        <Button disabled={!this.state.submitButtonEnabled}>Submit</Button>
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
