import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
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
    loadTimeOffRequestModel,
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
        if (this.props.timeOffRequest) {
            this.props.loadTimeOffRequestModel(this.props.timeOffRequest);
        }
    }

    render() {
        let startDatePicker = null;
        let endDatePicker = null;
        let returnDatePicker = null;

        if (!this.props.timeOffRequest.start_date || (this.props.timeOffRequest.start_date && this.props.startDate)) {
            startDatePicker = (
                <DatePicker
                    defaultDate={this.props.startDate}
                    onDateChange={this.props.changeStartDateValue}
                />
            );
        }

        if (!this.props.timeOffRequest.end_date || (this.props.timeOffRequest.end_date && this.props.endDate)) {
            endDatePicker = (
                <DatePicker
                    defaultDate={this.props.endDate}
                    onDateChange={this.props.changeEndDateValue}
                />
            );
        }

        if (!this.props.timeOffRequest.return_date || (this.props.timeOffRequest.return_date && this.props.returnDate)) {
            returnDatePicker = (
                <DatePicker
                    defaultDate={this.props.returnDate}
                    onDateChange={this.props.changeReturnDateValue}
                />
            );
        }

        return (
            <Form>
                <FormRow>
                    <Label>Start Date</Label>
                    {startDatePicker}
                </FormRow>

                <FormRow>
                    <Label>End Date</Label>
                    {endDatePicker}
                </FormRow>

                <FormRow>
                    <Label>Return Date</Label>
                    {returnDatePicker}
                </FormRow>

                <FormRow>
                    <Label>Details</Label>
                    <Container>
                        <Textarea
                            value={this.props.details}
                            onChangeText={this.props.changeDetailsText}
                        />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Out</Label>
                    <Container>
                        <Textbox
                            value={String(this.props.daysOut)}
                            onChangeText={this.props.changeDaysOutValue}
                        />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Used</Label>
                    <Container>
                        <Textbox
                            value={String(this.props.daysUsed)}
                            onChangeText={this.props.changeDaysUsedValue}
                        />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Manager Comments</Label>
                    <Container>
                        <Textarea
                            value={this.props.managerComments}
                            onChangeText={this.props.changeManagerCommentsText}
                        />
                    </Container>
                </FormRow>
            </Form>
        );
    }
}

TimeOffRequestFormComponent.propTypes = {
    // Properties
    daysOut: PropTypes.number,
    daysUsed: PropTypes.number,
    details: PropTypes.string,
    endDate: PropTypes.instanceOf(Date),
    managerComments: PropTypes.string,
    returnDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    timeOffRequest: PropTypes.object,

    // Functions
    changeDaysOutValue: PropTypes.func,
    changeDaysUsedValue: PropTypes.func,
    changeDetailsText: PropTypes.func,
    changeEndDateValue: PropTypes.func,
    changeManagerCommentsText: PropTypes.func,
    changeReturnDateValue: PropTypes.func,
    changeStartDateValue: PropTypes.func,
    loadTimeOffRequestModel: PropTypes.func,
};

const mapStateToProps = (state) => ({
    daysOut: state.timeOffForm.daysOut,
    daysUsed: state.timeOffForm.daysUsed,
    details: state.timeOffForm.details,
    endDate: state.timeOffForm.endDate,
    managerComments: state.timeOffForm.managerComments,
    returnDate: state.timeOffForm.returnDate,
    startDate: state.timeOffForm.startDate,
});

export const TimeOffRequestForm = connect(mapStateToProps, {
    changeDaysOutValue,
    changeDaysUsedValue,
    changeDetailsText,
    changeEndDateValue,
    changeManagerCommentsText,
    changeReturnDateValue,
    changeStartDateValue,
    loadTimeOffRequestModel,
})(TimeOffRequestFormComponent);
