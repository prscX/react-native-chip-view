import React, { Component } from "react";
import { ViewPropTypes, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import style from './Avatar.style'


import MaterialA from "../assets/material/A.png";
import MaterialB from "../assets/material/B.png";
import MaterialC from "../assets/material/C.png";
import MaterialD from "../assets/material/D.png";
import MaterialE from "../assets/material/E.png";
import MaterialF from "../assets/material/F.png";
import MaterialG from "../assets/material/G.png";
import MaterialH from "../assets/material/H.png";
import MaterialI from "../assets/material/I.png";
import MaterialJ from "../assets/material/J.png";
import MaterialK from "../assets/material/K.png";
import MaterialL from "../assets/material/L.png";
import MaterialM from "../assets/material/M.png";
import MaterialN from "../assets/material/N.png";
import MaterialO from "../assets/material/O.png";
import MaterialP from "../assets/material/P.png";
import MaterialQ from "../assets/material/Q.png";
import MaterialR from "../assets/material/R.png";
import MaterialS from "../assets/material/S.png";
import MaterialT from "../assets/material/T.png";
import MaterialU from "../assets/material/U.png";
import MaterialV from "../assets/material/U.png";
import MaterialW from "../assets/material/W.png";
import MaterialX from "../assets/material/X.png";
import MaterialY from "../assets/material/Y.png";
import MaterialZ from "../assets/material/Z.png";


import FlatA from "../assets/flat/A.png";
import FlatB from "../assets/flat/B.png";
import FlatC from "../assets/flat/C.png";
import FlatD from "../assets/flat/D.png";
import FlatE from "../assets/flat/E.png";
import FlatF from "../assets/flat/F.png";
import FlatG from "../assets/flat/G.png";
import FlatH from "../assets/flat/H.png";
import FlatI from "../assets/flat/I.png";
import FlatJ from "../assets/flat/J.png";
import FlatK from "../assets/flat/K.png";
import FlatL from "../assets/flat/L.png";
import FlatM from "../assets/flat/M.png";
import FlatN from "../assets/flat/N.png";
import FlatO from "../assets/flat/O.png";
import FlatP from "../assets/flat/P.png";
import FlatQ from "../assets/flat/Q.png";
import FlatR from "../assets/flat/R.png";
import FlatS from "../assets/flat/S.png";
import FlatT from "../assets/flat/T.png";
import FlatU from "../assets/flat/U.png";
import FlatV from "../assets/flat/U.png";
import FlatW from "../assets/flat/W.png";
import FlatX from "../assets/flat/X.png";
import FlatY from "../assets/flat/Y.png";
import FlatZ from "../assets/flat/Z.png";


class Avatar extends Component {
  static Themes = {
    Material: 0,
    Flat: 1
  }

  static propTypes = {
    avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.object]),
    theme: PropTypes.number
  };

  _renderAvatar() {
    let { avatar, renderAvatar, theme } = this.props;
    if (renderAvatar) return renderAvatar();

    let avatarIcon = null
    if (typeof avatar === "string") {
      avatar = avatar.toUpperCase();

      switch (avatar) {
        case "A":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatA} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialA} style={[style.container]} />;
          
          break;
        case "B":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatB} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialB} style={[style.container]} />;

          break;
        case "C":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatC} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialC} style={[style.container]} />;

          break;
        case "D":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatD} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialD} style={[style.container]} />;

          break;
        case "E":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatE} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialE} style={[style.container]} />;

          break;
        case "F":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatF} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialF} style={[style.container]} />;

          break;
        case "G":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatG} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialG} style={[style.container]} />;

          break;
        case "H":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatH} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialH} style={[style.container]} />;

          break;
        case "I":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatI} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialI} style={[style.container]} />;

          break;
        case "J":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatJ} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialJ} style={[style.container]} />;

          break;
        case "K":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatK} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialK} style={[style.container]} />;

          break;
        case "L":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatL} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialL} style={[style.container]} />;

          break;
        case "M":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatM} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialM} style={[style.container]} />;

          break;
        case "N":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatN} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialN} style={[style.container]} />;

          break;
        case "O":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatO} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialO} style={[style.container]} />;

          break;
        case "P":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatP} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialP} style={[style.container]} />;

          break;
        case "Q":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatQ} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialQ} style={[style.container]} />;

          break;
        case "R":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatR} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialR} style={[style.container]} />;

          break;
        case "S":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatS} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialS} style={[style.container]} />;

          break;
        case "T":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatT} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialT} style={[style.container]} />;

          break;
        case "U":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatU} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialU} style={[style.container]} />;

          break;
        case "V":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatV} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialV} style={[style.container]} />;

          break;
        case "W":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatW} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialW} style={[style.container]} />;

          break;
        case "X":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatX} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialX} style={[style.container]} />;

          break;
        case "Y":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatY} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialY} style={[style.container]} />;

          break;
        case "Z":
          if (theme === Avatar.Themes.Flat) avatarIcon = <Image source={FlatZ} style={[style.container]} />;
          else avatarIcon = <Image source={MaterialZ} style={[style.container]} />;

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

