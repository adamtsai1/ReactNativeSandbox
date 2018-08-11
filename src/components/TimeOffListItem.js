import moment from 'moment/src/moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../utility';

export const TimeOffListItem = ({ item, style }) => {
    const { containerStyle, iconStyle } = styles;
    let icon;
    let color;
    let dayLabel = item.total_days === 1 ? 'day' : 'days';
    let hourLabel = item.total_hours === 1 ? 'hour' : 'hours';

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
        <View style={[containerStyle, style]}>
            <Icon
                alignSelf="center"
                name={icon}
                size={28}
                style={iconStyle}
                color={color}
            />

            <Text>
                {moment(item.start_date).format('MMMM d YYYY')} - {moment(item.end_date).format('MMMM d YYYY')}
                {'\n'}
                {item.total_days} {dayLabel} - {item.total_hours} {hourLabel}
            </Text>
        </View>
    );
};

TimeOffListItem.propTypes = {
    item: PropTypes.object,
    style: PropTypes.object,
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
    },
    iconStyle: {
        marginRight: 10,
    },
};
