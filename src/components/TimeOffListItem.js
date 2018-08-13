import moment from 'moment/src/moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../utility';

export const TimeOffListItem = ({ item, style, onPress }) => {
    const { containerStyle, iconStyle } = styles;
    let icon;
    let color;
    const startDateText = moment(item.start_date, 'YYYY-MM-DD').format('MMMM d YYYY');
    const endDateText = moment(item.end_date, 'YYYY-MM-DD').format('MMMM d YYYY');
    const dayLabel = item.total_days === 1 ? 'day' : 'days';
    const hourLabel = item.total_hours === 1 ? 'hour' : 'hours';

    switch (item.status) {
        case 'pending':
            icon = 'question-circle';
            color = Colors.yellow;
            break;

        case 'approved':
            icon = 'check-circle';
            color = Colors.yellow;
            break;

        default:
            break;
    }

    return (
        <TouchableOpacity style={[containerStyle, style]} onPress={onPress}>
            <Icon
                alignSelf="center"
                name={icon}
                size={28}
                style={iconStyle}
                color={color}
            />

            <Text>
                {startDateText} - {endDateText}
                {'\n'}
                {item.total_days} {dayLabel} - {item.total_hours} {hourLabel}
            </Text>
        </TouchableOpacity>
    );
};

TimeOffListItem.propTypes = {
    item: PropTypes.object,
    style: PropTypes.object,
    onPress: PropTypes.func,
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
    },
    iconStyle: {
        marginRight: 10,
    },
};
