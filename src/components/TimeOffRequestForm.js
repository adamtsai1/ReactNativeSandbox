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

    componentDidUpdate() {
        if (this.props.onFormChange) {
            this.props.onFormChange({ valid: this.isFormValid() });
        }
    }

    isFormValid() {
        return this.props.startDate !== null
            && this.props.endDate !== null
            && this.props.returnDate !== null
            && this.props.details.length > 0
            && Number(this.props.daysOut) > 0
            && Number(this.props.daysUsed) > 0;
    }

    render() {
        let startDatePicker = null;
        let endDatePicker = null;
        let returnDatePicker = null;
        let managerCommentsTextarea = null;

        if (!this.props.timeOffRequest
            || !this.props.timeOffRequest.start_date
            || (this.props.timeOffRequest.start_date && this.props.startDate)) {

            startDatePicker = (
                <DatePicker
                    defaultDate={this.props.startDate}
                    disabled={this.props.editable === false}
                    onDateChange={this.props.changeStartDateValue}
                />
            );
        }

        if (!this.props.timeOffRequest
            || !this.props.timeOffRequest.end_date
            || (this.props.timeOffRequest.end_date && this.props.endDate)) {

            endDatePicker = (
                <DatePicker
                    defaultDate={this.props.endDate}
                    disabled={this.props.editable === false}
                    onDateChange={this.props.changeEndDateValue}
                />
            );
        }

        if (!this.props.timeOffRequest
            || !this.props.timeOffRequest.return_date
            || (this.props.timeOffRequest.return_date && this.props.returnDate)) {

            returnDatePicker = (
                <DatePicker
                    defaultDate={this.props.returnDate}
                    disabled={this.props.editable === false}
                    onDateChange={this.props.changeReturnDateValue}
                />
            );
        }

        if (this.props.timeOffRequest && this.props.timeOffRequest.status === 'approved') {
            managerCommentsTextarea = (
                <FormRow>
                    <Label>Manager Comments</Label>
                    <Container>
                        <Textarea
                            editable={this.props.editable}
                            value={this.props.managerComments}
                            onChangeText={this.props.changeManagerCommentsText}
                        />
                    </Container>
                </FormRow>
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
                            editable={this.props.editable}
                            value={this.props.details}
                            onChangeText={this.props.changeDetailsText}
                        />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Out</Label>
                    <Container>
                        <Textbox
                            editable={this.props.editable}
                            value={String(this.props.daysOut)}
                            onChangeText={text => this.props.changeDaysOutValue(Number(text))}
                        />
                    </Container>
                </FormRow>

                <FormRow>
                    <Label>Number of Days Used</Label>
                    <Container>
                        <Textbox
                            editable={this.props.editable}
                            value={String(this.props.daysUsed)}
                            onChangeText={text => this.props.changeDaysUsedValue(Number(text))}
                        />
                    </Container>
                </FormRow>

                {managerCommentsTextarea}
            </Form>
        );
    }
}

TimeOffRequestFormComponent.propTypes = {
    // Properties
    daysOut: PropTypes.number,
    daysUsed: PropTypes.number,
    details: PropTypes.string,
    editable: PropTypes.bool,
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
    onFormChange: PropTypes.func,
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
