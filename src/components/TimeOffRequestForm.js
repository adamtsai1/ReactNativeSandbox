import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App
import {
    changeDaysOutValue,
    changeDaysUsedValue,
    changeDetailsText,
    changeEndDateValue,
    changeManagerCommentsText,
    changeReturnDateValue,
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
                    <DatePicker onDateChange={this.props.changeReturnDateValue} />
                </FormRow>

                <FormRow>
                    <Label>Details</Label>
                    <Container>
                        <Textarea onChangeText={this.props.changeDetailsText} />
                    </Container>
                </FormRow>
                
                <FormRow>
                    <Label>Number of Days Out</Label>
                    <Container>
                        <Textbox onChangeText={this.props.changeDaysOutValue} />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Used</Label>
                    <Container>
                        <Textbox onChangeText={this.props.changeDaysUsedValue} />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Manager Comments</Label>
                    <Container>
                        <Textarea onChangeText={this.props.changeManagerCommentsText} />
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
    changeDaysOutValue: PropTypes.func,
    changeDaysUsedValue: PropTypes.func,
    changeDetailsText: PropTypes.func,
    changeEndDateValue: PropTypes.func,
    changeManagerCommentsText: PropTypes.func,
    changeReturnDateValue: PropTypes.func,
    changeStartDateValue: PropTypes.func,
};

const styles = {
};

export const TimeOffRequestForm = connect(null, {
    changeDaysOutValue,
    changeDaysUsedValue,
    changeDetailsText,
    changeEndDateValue,
    changeManagerCommentsText,
    changeReturnDateValue,
    changeStartDateValue,
})(TimeOffRequestFormComponent);
