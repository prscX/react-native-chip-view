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
    titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    titleAllowFontScaling: PropTypes.bool,

    avatar: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ]),
    avatarStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    selectable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ]),
    selectableStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    cancelable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ]),
    cancelabelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    backgroundColor: PropTypes.string,
    minWidth: PropTypes.number,
    height: PropTypes.number,

    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    contentContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    subContentContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),

    theme: PropTypes.number
  };

  static defaultProps = {
    avatar: true,
    selectable: false,
    cancelable: false,
    editable: true,
    disabled: false,
    titleAllowFontScaling: true,
    theme: Avatar.Themes.Material
  };

  _renderAvatar() {
    let { avatar, avatarStyle, height, title, theme } = this.props;

    if (avatar == false) return null;

    let styles = [];
    styles.push(style.avatarContainer);
    avatarStyle && styles.push(avatarStyle);

    height &&
      styles.push({ width: height, height: height, borderRadius: height });

    if (title && avatar === true) avatar = title.charAt(0);

    return (
      <View style={[, styles]}>
        <Avatar style={styles} avatar={avatar} theme={theme} />
      </View>
    );
  }

  _renderAction() {
    let {
      selectable,
      selectableStyle,
      cancelable,
      cancelableStyle,
      height,
      disabled,
      editable
    } = this.props;

    let icon,
      styles = [],
      actionStyle = [];

    styles.push(style.actionContainer);
    actionStyle.push(style.actionIcon);

    height &&
      styles.push({
        width: height / 2,
        height: height / 2,
        borderRadius: height / 2
      });
    height && actionStyle.push({ width: height / 3, height: height / 3 });

    if (!editable)
      return null
    else if (selectable) {
      selectableStyle && !disabled && styles.push(selectableStyle);
      if (selectable == true)
        icon = <Image source={select} style={actionStyle} />;
      else if (typeof selectable === "number")
        icon = <Image source={selectable} style={actionStyle} />;
      else icon = selectable;
    } else if (cancelable) {
      cancelableStyle && !disabled && styles.push(cancelableStyle);

      if (cancelable == true)
        icon = <Image source={cancel} style={actionStyle} />;
      else if (typeof cancelable === "number")
        icon = <Image source={cancelable} style={actionStyle} />;
      else icon = cancelable;
    }
    else return null;

    return <View style={styles}>{icon}</View>;
  }

  _renderContent() {
    let {
      titleStyle,
      maxWidth,
      ellipsizeMode,
      contentContainerStyle,
      subContentContainerStyle,
      disabled,
      editable,
      titleAllowFontScaling,
      disableTitleStyle
    } = this.props;
    let styles = [],
      contentContainerStyles = [],
      subStyles = [];

    contentContainerStyles.push(style.contentContainer);
    contentContainerStyles.push(style.contentContainerStyle);

    styles.push(style.title);
    titleStyle && styles.push(titleStyle);

    subStyles.push(style.subContentContainer);
    subStyles.push(subContentContainerStyle);

    maxWidth && styles.push({ maxWidth: maxWidth });

    if (ellipsizeMode === undefined) ellipsizeMode = "middle";
    if (disabled) { styles.push(disableTitleStyle) || styles.push(style.disabledTitleStyle) }

    return (
    <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onPress} disabled={disabled || !editable}>
        <View style={contentContainerStyles}>
          {this._renderAvatar()}
          <View style={[subStyles]}>
            <Text
              style={[styles]}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={1}
              allowFontScaling={titleAllowFontScaling}
            >
              {this.props.title}
            </Text>
          </View>
          {this._renderAction()}
        </View>
      </TouchableOpacity>
    );
  }

  _renderContainer() {
    let { backgroundColor, height, borderRadius, containerStyle, disabled, disableStyle } = this.props;

    let styles = [];
    styles.push(style.container);
    styles.push(containerStyle);

    backgroundColor && styles.push({ backgroundColor: backgroundColor });
    height && styles.push({ height: height, borderRadius: height });
    borderRadius && styles.push({ borderRadius: borderRadius });

    if (disabled) styles.push(disableStyle) || styles.push(style.disabledContainer);

    return <View style={styles}>{this._renderContent()}</View>;
  }

  render() {
    return this._renderContainer();
  }
}

export { RNChipView }
