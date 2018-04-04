import React, { Component } from "react";
import { ViewPropTypes, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import Avatar from './Avatar'

import style from "./RNChipView.style";

import cancel from '../assets/cancel.png'

class RNChipView extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,

    description: PropTypes.string,
    descriptionStyle: PropTypes.string,

    avatar: PropTypes.bool,
    avatarIcon: PropTypes.number,

    cancelable: PropTypes.bool,
    cancelIcon: PropTypes.number,

    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,

    opacity: PropTypes.bool,
    highlight: PropTypes.bool,
    bounce: PropTypes.bool,
    ripple: PropTypes.bool,

    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    avatar: true,

    cancelable: false,

    small: false,
    medium: true,
    large: false,

    opacity: false,
    highlight: false,
    bounce: false,
    ripple: false
  };

  _renderAvatar() {
    let { avatar, title } = this.props

    if (!avatar) return null;

    let styles;

    if (this.props.small) styles = style.avatarSmall;
    else if (this.props.medium) styles = style.avatarMedium;
    else if (this.props.large) styles = style.avatarLarge;
    else styles = style.avatarMedium;

    if (title && avatar === true) avatar = title.charAt(0)

    return <View style={[style.avatarContainer, styles]}>
        <Avatar style={styles} avatar={avatar} />
      </View>;
  }

  _renderAction() {
    if (!this.props.cancelable) return null;

    let styles;

    if (this.props.small) styles = style.cancelableSmall;
    else if (this.props.medium) styles = style.cancelableMedium;
    else if (this.props.large) styles = style.cancelableLarge;
    else styles = style.cancelableMedium;

    return <View style={[style.cancelableContainer, styles]} >
      <Image source={cancel} style={{
        width: 20,
        height: 20
      }} />
    </View>
  }

  _renderContent() {
    let { opacity, highlight, ripple, bounce, small, medium, large } = this.props

    let Wrapper;
    if (opacity) Wrapper = TouchableOpacity;
    else if (highlight) {
    } else if (bounce) {
    } else if (ripple) {
    } else Wrapper = TouchableOpacity;

    let titleStyle
    if (small) titleStyle = style.titleSmall
    else if (medium) titleStyle = style.titleMedium
    else if (large) titleStyle = style.titleLarge 

    return <Wrapper style={[style.contentContainer]}>
        {this._renderAvatar()}
        <View style={[style.subContentContainer]}>
          <Text style={[titleStyle, ...this.props.titleStyle]}>
            {this.props.title}
          </Text>
          {this._renderAction()}
        </View>
      </Wrapper>;
  }

  _renderContainer() {
    let styles;

    if (this.props.small) styles = style.small;
    else if (this.props.medium) styles = style.medium;
    else if (this.props.large) styles = style.large;
    else styles = style.medium;

    return (
      <View style={[style.container, styles]}>{this._renderContent()}</View>
    );
  }

  render() {
    return this._renderContainer();
  }
}

export default RNChipView;
