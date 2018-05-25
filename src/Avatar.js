import React, { Component } from "react";
import { ViewPropTypes, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import style from './Avatar.style'

import A from "../assets/A.png"
import B from "../assets/B.png"
import C from "../assets/C.png"
import D from "../assets/D.png"
import E from "../assets/E.png"
import F from "../assets/F.png"
import G from "../assets/G.png"
import H from "../assets/H.png"
import I from "../assets/I.png"
import J from "../assets/J.png"
import K from "../assets/K.png"
import L from "../assets/L.png"
import M from "../assets/M.png"
import N from "../assets/N.png"
import O from "../assets/O.png"
import P from "../assets/P.png"
import Q from "../assets/Q.png"
import R from "../assets/R.png"
import S from "../assets/S.png"
import T from "../assets/T.png"
import U from "../assets/U.png"
import V from "../assets/U.png"
import W from "../assets/W.png"
import X from "../assets/X.png"
import Y from "../assets/Y.png"
import Z from "../assets/Z.png"


class Avatar extends Component {
  static propTypes = {
    avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.object])
  };
  static defaultProps = {};

  _renderAvatar() {
    let { avatar, renderAvatar } = this.props;
    if (renderAvatar) return renderAvatar();

    let avatarIcon;
    if (typeof avatar === "string") {
      avatar = avatar.toUpperCase();

      switch (avatar) {
        case "A":
          avatarIcon = <Image source={A} style={[style.container]} />;
          break;
        case "B":
          avatarIcon = <Image source={B} style={[style.container]} />;
          break;
        case "C":
          avatarIcon = <Image source={C} style={[style.container]} />;
          break;
        case "D":
          avatarIcon = <Image source={D} style={[style.container]} />;
          break;
        case "E":
          avatarIcon = <Image source={E} style={[style.container]} />;
          break;
        case "F":
          avatarIcon = <Image source={F} style={[style.container]} />;
          break;
        case "G":
          avatarIcon = <Image source={G} style={[style.container]} />;
          break;
        case "H":
          avatarIcon = <Image source={H} style={[style.container]} />;
          break;
        case "I":
          avatarIcon = <Image source={I} style={[style.container]} />;
          break;
        case "J":
          avatarIcon = <Image source={J} style={[style.container]} />;
          break;
        case "K":
          avatarIcon = <Image source={K} style={[style.container]} />;
          break;
        case "L":
          avatarIcon = <Image source={L} style={[style.container]} />;
          break;
        case "M":
          avatarIcon = <Image source={M} style={[style.container]} />;
          break;
        case "N":
          avatarIcon = <Image source={N} style={[style.container]} />;
          break;
        case "O":
          avatarIcon = <Image source={O} style={[style.container]} />;
          break;
        case "P":
          avatarIcon = <Image source={P} style={[style.container]} />;
          break;
        case "Q":
          avatarIcon = <Image source={Q} style={[style.container]} />;
          break;
        case "R":
          avatarIcon = <Image source={R} style={[style.container]} />;
          break;
        case "S":
          avatarIcon = <Image source={S} style={[style.container]} />;
          break;
        case "T":
          avatarIcon = <Image source={T} style={[style.container]} />;
          break;
        case "U":
          avatarIcon = <Image source={U} style={[style.container]} />;
          break;
        case "V":
          avatarIcon = <Image source={V} style={[style.container]} />;
          break;
        case "W":
          avatarIcon = <Image source={W} style={[style.container]} />;
          break;
        case "X":
          avatarIcon = <Image source={X} style={[style.container]} />;
          break;
        case "Y":
          avatarIcon = <Image source={Y} style={[style.container]} />;
          break;
        case "Z":
          avatarIcon = <Image source={Z} style={[style.container]} />;
          break;
      }
    } else if (typeof avatar === 'number') avatarIcon = <Image source={avatar} style={[style.container]} />;
    else avatarIcon = avatar

    return avatarIcon
  }

  render() {
    return this._renderAvatar();
  }
}

export default Avatar;

