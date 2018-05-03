

<p align="center">
  <img src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VM1VORGxxWUx5U0E/components-chips.png" width="300" height="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-chip-view"><img src="http://img.shields.io/npm/v/react-native-chip-view.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-chip-view/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-chip-view#License"><img src="https://img.shields.io/npm/l/react-native-chip-view.svg?style=flat" /></a>
</p>


# React Native: Material Chip View
Material Chips represent complex entities in small blocks, such as a contact. A chip may contain entities such as a photo, text, rules, an icon, or a contact.


## Getting started

`$ npm install react-native-chip-view --save`


## Types of Chips
Chips can be used for various types of entities, including free form text, predefined text, rules, or contacts. Chips may also contain icons.

<img src='./assets/hero.png' width="600" height="600">

## Usage

```javascript

import { RNChipView } from 'react-native-chip-view'

<RNChipView
  title={'prscX'}
  avatar={false}
/>

```


## Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |        | Specify label wants to show. **Required**
| `titleStyle`       | `object`     |         | Specify style wants to apply on title
| `avatar`       | `bool, number`     |         | - Specify true in case you need avatar. - Specify avatar in case you want custom avatar
| `avatarStyle`       | `object`     |         | Specify custom avatar style
| `selectable`       | `bool, number`     |         | - Specify true in case you need chip as selection. - Specify selection icon in case you want to pass your own icon
| `selectableStyle`       | `string`     |         | Specify custom selectable style
| `cancelable`       | `string`     |         | - Specify true in case you need chip as cancelable. - Specify cancelable icon in case you want to pass your own icon
| `cancelableStyle`       | `string`     |         | Specify custom cancelable style
| `backgroundColor`       | `string`     |    `#dedede`    | Specify chip background color
| `minWidth`       | `string`     |    `300`     | Specify chip min width
| `height`       | `string`     |    `40`     | Specify chip height


## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the Apache 2 License.

RNChipView @ Pranav Raj Singh Chauhan

