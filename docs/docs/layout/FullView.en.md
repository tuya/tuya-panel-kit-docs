---
group:
  title: Layout
  order: 2
title: FullView
---

# FullView

## Introduction

`FullView` encapsulates the common component layout of the device control panel page, including the head bar (TopBar), mask layer (MaskView), offline view (OfflineView), background (Background), alarm reminder (Notification) and prompt (GlobalToast)，`FullView` has been built into `NavigatorLayout` component, generally not used alone。

## Header Bar（TopBar）

`TopBar` supports user transmission attributes are:

- title - Header Title
- topbarStyle - Header Style
- hideTopbar - Whether to hide TopBar
- topbarTextStyle - TopBar Text Style
- renderTopBar - Custom TopBar Component

## Alarm reminder（Notification）

`Notification` is a component that is hidden under the head bar and has a sliding up and pulling effect，Open notification bar call: `Notification.show()`，Close the notification bar to call: `Notification.hide()`。
Its specific properties can refer to components `Notification`。

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/rms-static/07c8aba0-40fc-11eb-b187-dbc1e538b9b9-1608273677146.png?tyName=Wifi_en.png"
      width="50%"
      height="50%"
    />
  </p>
</center>

In addition, a signal strength reminder notification is mounted on `FullView`, which needs to be met by the real device to support signal strength reporting, and the requested signal strength value is less than the threshold obtained by the cloud interface (-75), a pop-up reminder (as shown in the figure above).

App is version 3.17 and above (that is, get appRnVersion >= '5.24' through TYSdk.mobile.mobileInfo),
The pop-up details page contains an entry to re-check the network signal,If the app version is lower than 3.17, there is no jump entry on the popup details page.

#### i18n strings

```jsx
wifiBadTitle: 'Device Wi-Fi signal is weak',
detectPlease: 'Please check:',
internetAccess: '1. Whether the router connected to the device works normally and the network is smooth.',
obstructions: '2. Is the device too far away from the router, partition wall or other obstructions?',
location: 'The device Wi-Fi signal is weak, please change the device location.',
```

## GlobalToast

`GlobalToast` is a global prompt attached to `FullView` with a fade-in and fade-out animation effect. It is currently applied to the new version of digital countdown to set a reminder after a successful action.
Open global call: `GlobalToast.show()`, Close the notification bar to call `GlobalToast.hide()`. Its specific properties can refer to component `Toast`.

## Background

`Background` supports image format (including local images or network resources) and gradient format.

The attributes that support user transmission are `background`:

- When the type of `background` is `number,` the picture background is displayed.
- When the type of `background` is `object,` the gradient background is displayed.

## OfflineView

`OfflineView` is when the App, device and Bluetooth are offline, a prompt box will pop up to tell the user the current offline status. The offline logic is shown in the figure below.

![Offline](https://images.tuyacn.com/rms-static/60b60520-40d7-11eb-bdd0-95079b95c9b6-1608257934962.png?tyName=Offline_en.png)

<h3 id="h3Title">一、WI-FI Offline</h3>

#### New version offline

![OfflineWifi](<https://images.tuyacn.com/rms-static/3a778c50-40df-11eb-b278-e1deccfbbdd6-1608261306773.png?tyName=Offline_en(1).png>)

###### Explanation

- The new offline popup only supports App version 3.16 and above, that is, appRnVersion >= 5.23, and the old offline mode is lower than this version;
- The return button at the top of the pop-up box directly returns to the App list page;
- The device picture in the pop-up box is pulled from the cloud, if the pull fails, it will not be displayed;
- The Wi-Fi offline copy can be configured by the product manager. When the copy exceeds 4, the "More Help" button will appear, otherwise, no more help button will appear;
- Click "More Help", it will jump to the second page: help page, the first time you enter, there will be loading

###### i18n strings

```javascript
offline_title: 'Device offline, Please check in turn:',
offline_alreadyOffline: 'Device offline';
offline_pleaseCheck: 'Please check in turn:'';
offline_textLinkBefore: '1. Please check whether your device has power or not.\n2. Whether the router connected to your device works normally.';
offline_linkFront: "3. Check whether the router's name or password has been changed, you can try ";
offline_link: 'reconnection.';
offline_textLinkAfter: '4. Is your device too far away from the router, poor signal or blocked.';
offline_moreHelp: 'More Help';
offline_textLinkMore: '';
help: 'help';
```

###### Remark

- The third entry of Wi-Fi copywriting is to facilitate access to the short chain of the homepage of the app distribution network in the later period.If the third paragraph of the text is modified, you can modify any of the `offline_linkFront` and `offline_link fields`, and the other field should be blank.
- `offline_textLinkMore` is to configure more than four texts, Please use `\n` for segmentation, refer to the `offline_textLinkBefore` field

#### The old version is offline (does not meet the conditions of the new version offline to display the old version offline)

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/rms-static/f71c49c0-40fa-11eb-bf7f-5f284009845d-1608273219676.png?tyName=Old_en.png"
      width="40%"
      height="40%"
    />
  </p>
</center>

###### i18n strings

```javascript
appoffline: 'Network error, please check ';
```

<h3 id="h3Title">二、Bluetooth offline</h3>

![BleOfflineWifi](https://images.tuyacn.com/rms-static/b0004d20-40ff-11eb-bf7f-5f284009845d-1608275247858.png?tyName=Ble_en.png)

###### i18n strings

```javascript
offline: 'Device Offline',
appoffline: 'Network error, please check ',
bluetoothOfflineTip: 'Please turn on "Bluetooth"',
alreadyKnow: 'Already Know',
checkHelp: 'Check Help',
deviceOffline: 'Unable to Connect',
backToHome: 'Back Home',
openBle: 'Open Bluetooth',
openBleShare: 'Open Bluetooth Sharing';
openBleShareStep: 'Setting > TuyaSmart > Open Bluetooth Sharing',
bluetoothShare: 'Bluetooth Sharing',
deviceOfflineHelp: '① Make sure that the equipment is powered on normally (or the battery is sufficient).\n② Keep the cell phone as close as possible to the device.\n③ If the device has been connected by other mobile phones, please disconnect the connection first.';
deviceOfflineHelpNew: '① Make sure that the equipment is powered on normally (or the battery is sufficient).\n② Keep the cell phone as close as possible to the device.\n③ If the device has been connected by other mobile phones, please disconnect the connection first, go on ';
offline_link: 'reconnection.';
```
