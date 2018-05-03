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
    avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
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
          avatarIcon = A;
          break;
        case "B":
          avatarIcon = B;
          break;
        case "C":
          avatarIcon = C;
          break;
        case "D":
          avatarIcon = D;
          break;
        case "E":
          avatarIcon = E;
          break;
        case "F":
          avatarIcon = F;
          break;
        case "G":
          avatarIcon = G;
          break;
        case "H":
          avatarIcon = H;
          break;
        case "I":
          avatarIcon = I;
          break;
        case "J":
          avatarIcon = J;
          break;
        case "K":
          avatarIcon = K;
          break;
        case "L":
          avatarIcon = L;
          break;
        case "M":
          avatarIcon = M;
          break;
        case "N":
          avatarIcon = N;
          break;
        case "O":
          avatarIcon = O;
          break;
        case "P":
          avatarIcon = P;
          break;
        case "Q":
          avatarIcon = Q;
          break;
        case "R":
          avatarIcon = R;
          break;
        case "S":
          avatarIcon = S;
          break;
        case "T":
          avatarIcon = T;
          break;
        case "U":
          avatarIcon = U;
          break;
        case "V":
          avatarIcon = V;
          break;
        case "W":
          avatarIcon = W;
          break;
        case "X":
          avatarIcon = X;
          break;
        case "Y":
          avatarIcon = Y;
          break;
        case "Z":
          avatarIcon = Z;
          break;
      }
    } else avatarIcon = avatar;

    return <Image source={avatarIcon} style={[style.container]} />;
  }

  render() {
    return this._renderAvatar();
  }
}

export default Avatar;

