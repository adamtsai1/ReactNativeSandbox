import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
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
    createTimeOffRequest,
    loadTimeOffRequestModel,
    resetTimeOffRequestModel,
    updateTimeOffRequest,
} from '../actions/timeOffFormActions';

import {
    Button,
    Container,
    Form,
    FormRow,
    DatePicker,
    Label,
    Textarea,
    Textbox,
} from '../components';

class TimeOffRequestFormComponent extends Component {
    constructor() {
        super();
        this.getTimeOffRequestModel = this.getTimeOffRequestModel.bind(this);
        this.saveTimeOffRequest = this.saveTimeOffRequest.bind(this);
    }

    componentWillMount() {
        if (this.props.timeOffRequest) {
            this.props.loadTimeOffRequestModel(this.props.timeOffRequest);
        } else {
            this.props.resetTimeOffRequestModel();
        }
    }

    componentDidMount() {
        const timeOffRequest = this.props.timeOffRequest;
        if (timeOffRequest) {
            if (timeOffRequest.start_date) {
                this.startDatePicker.setDate(timeOffRequest.start_date);
            }

            if (timeOffRequest.end_date) {
                this.endDatePicker.setDate(timeOffRequest.end_date);
            }

            if (timeOffRequest.return_date) {
                this.returnDatePicker.setDate(timeOffRequest.return_date);
            }
        }
    }

    getTimeOffRequestModel() {
        return {
            start_date: this.props.startDate,
            end_date: this.props.endDate,
            return_date: this.props.returnDate,
            days_out: Number(this.props.daysOut),
            days_used: Number(this.props.daysUsed),
            details: this.props.details,
            manager_comments: this.props.managerComments,
        };
    }

    isFormValid() {
        return this.props.startDate !== null
            && this.props.endDate !== null
            && this.props.returnDate !== null
            && this.props.details.length > 0
            && Number(this.props.daysOut) > 0
            && Number(this.props.daysUsed) > 0;
    }

    saveTimeOffRequest() {
        const self = this;
        const timeOffRequest = this.getTimeOffRequestModel();
        let apiCall;

        if (this.props.id > 0) {
            apiCall = this.props.updateTimeOffRequest(timeOffRequest);
        } else {
            timeOffRequest.status = 'pending';
            apiCall = this.props.createTimeOffRequest(timeOffRequest);
        }

        apiCall.then(response => {
            this.props.onTimeOffRequestSaved(response);
        });
    }

    render() {
        let managerCommentsTextarea = null;
        let submitButton = null;

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

        const status = this.props.timeOffRequest ? (this.props.timeOffRequest.status || '') : '';
        if (status !== 'pending' && status !== 'approved') {
            submitButton = (
                <Button disabled={!this.isFormValid()} onPress={this.saveTimeOffRequest}>
                    Submit
                </Button>
            );
        }

        return (
            <View>
                <Form>
                    <FormRow>
                        <Label>Start Date</Label>
                        <DatePicker
                            disabled={this.props.editable === false}
                            ref={(datepicker) => { this.startDatePicker = datepicker; }}
                            onDateChange={this.props.changeStartDateValue}
                        />
                    </FormRow>

                    <FormRow>
                        <Label>End Date</Label>
                        <DatePicker
                            disabled={this.props.editable === false}
                            ref={(datepicker) => { this.endDatePicker = datepicker; }}
                            onDateChange={this.props.changeEndDateValue}
                        />
                    </FormRow>

                    <FormRow>
                        <Label>Return Date</Label>
                        <DatePicker
                            disabled={this.props.editable === false}
                            ref={(datepicker) => { this.returnDatePicker = datepicker; }}
                            onDateChange={this.props.changeReturnDateValue}
                        />
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

                {submitButton}
            </View>
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
    id: PropTypes.number,
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
    createTimeOffRequest: PropTypes.func,
    loadTimeOffRequestModel: PropTypes.func,
    onTimeOffRequestSaved: PropTypes.func,
    resetTimeOffRequestModel: PropTypes.func,
    updateTimeOffRequest: PropTypes.func,
};

const mapStateToProps = (state) => ({
    daysOut: state.timeOffForm.daysOut,
    daysUsed: state.timeOffForm.daysUsed,
    details: state.timeOffForm.details,
    endDate: state.timeOffForm.endDate,
    id: state.timeOffForm.id,
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
    createTimeOffRequest,
    loadTimeOffRequestModel,
    resetTimeOffRequestModel,
    updateTimeOffRequest,
})(TimeOffRequestFormComponent);
