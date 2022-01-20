---
group:
  title: Layout
  order: 2
title: FullView
---

<Desc>

`FullView` encapsulates the common component layout of the device control panel page, including the head bar (TopBar), mask layer (MaskView), offline view (OfflineView), background (Background), alarm reminder (Notification) and prompt (GlobalToast)，`FullView` has been built into `NavigatorLayout` component, generally not used alone。

</Desc>

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
wifiBadTitle: 'Weak Wi-Fi Signal',
detectPlease: 'Check the following items:',
internetAccess: '1. Whether the router that is connected to the device is working as expected in excellent network conditions.',
obstructions: '2. Whether your device is too far away from the router, or the signal is obstructed by walls or other barriers.',
location: 'The Wi-Fi signal of the device is weak. Change the device position.',
retest: 'Retest Network'
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

### 一、WI-FI Offline

#### New version offline

![OfflineWifi](https://images.tuyacn.com/rms-static/3629ae30-d8ba-11eb-815d-e39234ce96ff-1624957984915.png?tyName=wifi_update_en.png)

###### Explanation

- The new offline popup only supports App version 3.16 and above, that is, appRnVersion >= 5.23, and the old offline mode is lower than this version;
- The return button at the top of the pop-up box directly returns to the App list page;
- The device picture in the pop-up box is pulled from the cloud, if the pull fails, it will not be displayed;
- The Wi-Fi offline copy can be configured by the product manager. When the copy exceeds 4, the "More Help" button will appear, otherwise, no more help button will appear;
- Click "More Help", when `App version >= 3.34.5, and component library version >= 4.8.3`, it will jump to H5 link, page content does not support customization, content includes knowledge items, intelligent customer service and online customer service; Otherwise, the secondary page is displayed: The help page is loaded for the first time.

###### i18n strings

```javascript
offline_title: 'The device gets offline. Check the following items:',
offline_alreadyOffline: 'Offline Device';
offline_pleaseCheck: 'Check the following items:';
offline_textLinkBefore: '1. Whether your device is powered on.\n2. Whether the router that is connected to your device is working as expected.';
offline_linkFront: "3. Whether the name or password of the router is modified. You can try to ";
offline_link: 'reconnect the router.';
offline_textLinkAfter: '4. Whether your device is too far away from the router, whether the signal is weak, or whether the data transmission is obstructed.';
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

### 二、Bluetooth offline

![BleOfflineWifi](https://images.tuyacn.com/rms-static/398a0940-d954-11eb-815d-e39234ce96ff-1625024133076.png?tyName=Ble_en_update.png)

###### Explanation

- Click "View Help", when `App version >= 3.34.5, and component library version >= 4.8.3`, it will jump to H5 link, page content does not support customization, content includes knowledge items, intelligent customer service and online customer service; Otherwise, the secondary page is displayed: The help page is loaded for the first time.

###### i18n strings

```javascript
offline: 'Device Offline',
appoffline: 'Network error, please check ',
bluetoothOfflineTip: 'Enable Bluetooth on your mobile phone.',
alreadyKnow: 'Got It',
checkHelp: 'View Help',
deviceOffline: 'Device Connection Failure',
backToHome: 'Homepage',
openBle: 'Enable System Bluetooth',
openBleShare: 'Enable Bluetooth Sharing';
openBleShareStep: 'Settings > Find Your App > Enable Bluetooth Sharing',
bluetoothShare: 'Bluetooth Sharing',
deviceOfflineHelp: '① Make sure that the device is powered on or that the battery capacity is sufficient.\n② Place the mobile phone as close as possible to the device.\n③ If the device has been connected to another mobile phone, close the connection and try to ';
deviceOfflineHelpNew: '① Make sure that the equipment is powered on normally (or the battery is sufficient).\n② Keep the cell phone as close as possible to the device.\n③ If the device has been connected by other mobile phones, please disconnect the connection first, go on ';
offline_link: 'reconnect the router.';
offline_bleHelpTitle: 'View Related Help',
offline_bleNotConnect: 'Please try the following:',
offline_bleDetails:
  '1. Ensure the network and gateway is working.\n\n2. Check your mobile device has Bluetooth turned on, and check your Bluetooth device has power [check for poor power supply, loose connection or a dead battery].\n\n3. Ensure the Bluetooth device is within adequate range (about 10 meters) to your mobile phone or other Bluetooth devices.',

```
