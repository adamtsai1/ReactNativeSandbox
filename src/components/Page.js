import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

class PageComponent extends Component {
    render() {
        const {
            contentContainerStyle,
            headerStyle,
            innerPageStyle,
            outerPageStyle,
        } = styles;

        return (
            <View style={outerPageStyle}>
                <View style={contentContainerStyle}>
                    <Spinner visible={this.props.loading} />
                    <Text style={headerStyle}>{this.props.title}</Text>
                    <View style={innerPageStyle}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

PageComponent.propTypes = {
    children: PropTypes.any,
    loading: PropTypes.bool,
    title: PropTypes.string,
};

const styles = {
    contentContainerStyle: {
        flex: 1,
    },
    headerStyle: {
        backgroundColor: '#d1de3a',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        // marginBottom: 8,
        padding: 10,
        textAlign: 'center',
    },
    innerPageStyle: {
        // padding: 10,
    },
    outerPageStyle: {
        backgroundColor: '#fff',
        flex: 1,
    },
};

const mapStateToProps = (state) => ({
    loading: state.app.loading,
});

export const Page = connect(mapStateToProps, {})(PageComponent);
