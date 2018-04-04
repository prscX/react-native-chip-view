import React, { Component } from "react";
import { ViewPropTypes, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import style from './Avatar.style'

import A from '../assets/A.jpg'
import B from "../assets/B.jpg";
import C from "../assets/C.jpg";
import D from "../assets/D.jpg";
import E from "../assets/E.jpg";
import F from "../assets/F.jpg";
import G from "../assets/G.jpg";
import H from "../assets/H.jpg";
import I from "../assets/I.jpg";
import J from "../assets/J.jpg";
import K from "../assets/K.jpg";
import L from "../assets/L.jpg";
import M from "../assets/M.jpg";
import N from "../assets/N.jpg";
import O from "../assets/O.jpg";
import P from "../assets/P.jpg";
import Q from "../assets/Q.jpg";
import R from "../assets/R.jpg";
import S from "../assets/S.jpg";
import T from "../assets/T.jpg";
import U from "../assets/U.jpg";
import V from "../assets/V.jpg";
import W from "../assets/W.jpg";
import X from "../assets/X.jpg";
import Y from "../assets/Y.jpg";
import Z from "../assets/Z.jpg";


class Avatar extends Component {
  static propTypes = {
    avatar: PropTypes.number
  };
  static defaultProps = {
  }

  _renderAvatar () {
    let { avatar, renderAvatar } = this.props
    if (renderAvatar) return renderAvatar()

    if (avatar) {
    
    }

    avatar && (avatar = avatar.toUpperCase())
    
    let avatarIcon
    switch (avatar) {
      case "A":
          avatarIcon = A
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

    return <Image source={avatarIcon} style={[style.container]} ></Image>
  }

  render () {
    return this._renderAvatar()
  }
}

export default Avatar;

