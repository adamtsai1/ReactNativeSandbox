import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App
import {
    changeEndDateValue,
    changeStartDateValue,
} from '../actions/timeOffFormActions';

import {
    Container,
    Form,
    FormRow,
    DatePicker,
    Label,
    Textarea,
    Textbox,
} from '../components';

class TimeOffRequestFormComponent extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <Form>
                <FormRow>
                    <Label>Start Date</Label>
                    <DatePicker onDateChange={this.props.changeStartDateValue} />
                </FormRow>

                <FormRow>
                    <Label>End Date</Label>
                    <DatePicker onDateChange={this.props.changeEndDateValue} />
                </FormRow>

                <FormRow>
                    <Label>Return Date</Label>
                    <DatePicker />
                </FormRow>

                <FormRow>
                    <Label>Details</Label>
                    <Container>
                        <Textarea />
                    </Container>
                </FormRow>
                
                <FormRow>
                    <Label>Number of Days Out</Label>
                    <Container>
                        <Textarea />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Used</Label>
                    <Container>
                        <Textbox />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Manager Comments</Label>
                    <Container>
                        <Textarea />
                    </Container>
                </FormRow>
            </Form>
        );
    }
}

TimeOffRequestFormComponent.propTypes = {
    // Properties
    timeOffRequest: PropTypes.object,

    // Functions
    changeEndDateValue: PropTypes.func,
    changeStartDateValue: PropTypes.func,
};

const styles = {
};

export const TimeOffRequestForm = connect(null, {
    changeEndDateValue,
    changeStartDateValue,
})(TimeOffRequestFormComponent);
