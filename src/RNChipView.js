import React, { Component } from "react";
import {
  ViewPropTypes,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import PropTypes from "prop-types";

import Avatar from './Avatar'

import style from "./RNChipView.style";

import select from '../assets/select.png'
import cancel from '../assets/cancel.png'

class RNChipView extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,

    description: PropTypes.string,
    descriptionStyle: PropTypes.object,

    avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    avatarStyle: PropTypes.object,

    selectable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    selectableStyle: PropTypes.object,

    cancelable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    cancelabelStyle: PropTypes.object,

    backgroundColor: PropTypes.string,
  };

  static defaultProps = {
    avatar: true,
    selectable: false,
    cancelable: false
  };

  _renderAvatar() {
    let { avatar, avatarStyle, title } = this.props;

    if (avatar == false) return null;

    let styles = [];
    styles.push(style.avatarContainer);
    avatarStyle && styles.push(avatarStyle);

    if (title && avatar === true) avatar = title.charAt(0);

    return (
      <View style={[, styles]}>
        <Avatar style={styles} avatar={avatar} />
      </View>
    );
  }

  _renderAction() {
    let {
      selectable,
      selectableStyle,
      cancelable,
      cancelableStyle,
    } = this.props;

    let icon,
      styles = [];
    styles.push(style.actionContainer);

    if (selectable) {
      if (selectable == true) icon = select;
      else icon = selectable;

      selectableStyle && styles.push(selectableStyle);
    } else if (cancelable) {
      if (cancelable == true) icon = cancel;
      else icon = cancelable;

      cancelableStyle && styles.push(cancelableStyle);
    } else return null;

    return (
      <View style={styles}>
        <Image
          source={icon}
          style={style.actionIcon}
        />
      </View>
    );
  }

  _renderContent() {

    let { titleStyle } = this.props
    let styles = []

    styles.push(style.title)
    titleStyle && styles.push(style.titleStyle)

    return <TouchableOpacity style={{ flex: 1 }}>
        <View style={[style.contentContainer]}>
          {this._renderAvatar()}
          <View style={[style.subContentContainer]}>
            <Text style={[titleStyle, ...this.props.titleStyle]} ellipsizeMode={"middle"} numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
          {this._renderAction()}
        </View>
      </TouchableOpacity>;
  }

  _renderContainer() {
    let { backgroundColor } = this.props

    let styles = []
    styles.push(style.container)

    backgroundColor && styles.push({ backgroundColor: backgroundColor });

    return <View style={styles}>
        {this._renderContent()}
      </View>;
  }

  render() {
    return this._renderContainer();
  }
}

export default RNChipView;
