---
group:
  title: 布局
  order: 2
title: FullView 面板布局
---

# FullView 面板布局

## 简介

`FullView` 封装了设备控制面板页面常用的组件布局，包括头部栏（TopBar）、遮罩层（MaskView）、离线视图（OfflineView）、背景（Background）、告警提醒（Notification） 和 提示（GlobalToast），`FullView` 已内置于 `NavigatorLayout` 组件内，一般不会单独使用。

<Divider></Divider>

## 头部栏（TopBar）

`TopBar` 支持用户传输的属性有:

- title - 头部栏标题
- topbarStyle - 头部栏样式
- hideTopbar - 是否隐藏 TopBar
- topbarTextStyle - TopBar 字体样式
- renderTopBar - 自定义 TopBar 组件

## 告警提醒（Notification）

`Notification` 是隐藏在头部栏下面具有下滑上拉动效的一个组件，开启通知栏调用： `Notification.show()`，关闭通知栏可调用 `Notification.hide()`。
其具体属性可参考组件 `Notification`。

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/rms-static/07ffc130-40fc-11eb-b187-dbc1e538b9b9-1608273677507.png?tyName=Wifi_zh.png"
      width="50%"
      height="50%"
    />
  </p>
</center>

`另外，FullView` 上挂载了信号强度提醒通知，需满足真实设备支持信号强度上报，并且请求到的信号强度值 < 云端接口获取的阈值（-75）时，会弹框提醒（如上图所示），App 在版本 3.17 及以上（即通过 TYSdk.mobile.mobileInfo 获取 appRnVersion >= '5.24'），
弹框详情页包含跳转至重新检测网络信号的入口，App 版本低于 3.17 弹框详情页则无跳转入口。

##### 多语言字段

```jsx
wifiBadTitle: '设备Wi-Fi信号弱',
detectPlease: '请检查:',
internetAccess: '1.设备连接的路由器是否正常工作，网络通畅',
obstructions: '2.设备是否与路由器距离过远、隔墙或有其他遮挡物',
retest: '重新检测网络',
location: '设备Wi-Fi信号弱，请更换设备位置',
```

## 提示(GlobalToast)

`GlobalToast` 是挂载在 `FullView` 下伴有淡入淡出的动画效果的全局提示，目前应用于新版数字倒计时设置成功动作后的提醒。
开启全局调用：`GlobalToast.show()`，关闭通知栏可调用 `GlobalToast.hide()`。其具体属性可参考组件 `Toast`。

## 背景(Background)

`Background` 支持图片形式（包括本地图片或网络资源）和 渐变形式。
支持用户传输的属性有 `background`:

- 当 `background` 的类型为 `number，` 即展示图片背景，
- 当 `background` 的类型为 `object，` 即展示渐变背景。

## 离线视图(OfflineView)

`OfflineView` 是当 App、设备以及蓝牙离线的时候，弹出提示框告诉用户当前的离线状态，离线逻辑如下图所示。

![Offline](https://images.tuyacn.com/rms-static/57361300-40d7-11eb-a7fa-49239df0f48f-1608257919024.png?tyName=Offline.png)

<h3 id="h3Title">一、WI-FI 离线</h3>

#### 新版离线

![OfflineWifi](https://images.tuyacn.com/rms-static/35925800-40df-11eb-b278-e1deccfbbdd6-1608261298560.png?tyName=Offline_zh.png)

###### 说明

- 新离线弹框仅支持 App 版本为 3.16 及以上，即 appRnVersion >= 5.23，低于该版本还是为旧离线模式；
- 弹框中的顶端返回按钮直接返回至 App 列表页面；
- 弹框的设备图片从云端拉取，如果拉取失败则不会显示；
- Wi-Fi 离线的文案可由产品经理自行配置，当文案超过 4 条时，则会出现《更多帮助》按钮，否则不会出现更多帮助按钮；
- 点击《更多帮助》，会跳转至二级页面：帮助页面，第一次进入会有 loading 加载情况

###### 多语言字段

```javascript
offline_title: '设备已离线，请依次检查',
offline_alreadyOffline: '设备已离线';
offline_pleaseCheck: '请依次检查：';
offline_textLinkBefore: '1. 请检查您的设备是否有电\n2. 您的设备连接的路由器是否正常工作';
offline_linkFront: '3. 检查是否修改了路由器的名称或密码，可以尝试';
offline_link: '重新连接';
offline_textLinkAfter: '4. 您的设备是否里路由器过远、信号较差或有遮挡物';
offline_moreHelp: '更多帮助';
offline_textLinkMore: '';
help: '帮助';
```

###### 备注

- Wi-Fi 文案的第三条拆开写是为了在后期方便接入跳转 App 配网首页的短链，如果第三段文案有所修改，可以修改 offline_linkFront 和 offline_link 任一字段文案，另一个字段请置为空字符
- offline_textLinkMore 是为了配置超过四条的文案，分段请使用 \n，参考 offline_textLinkBefore 字段

#### 旧版离线（不符合新版离线的条件展示旧版离线）

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/rms-static/f6e38680-40fa-11eb-bf7f-5f284009845d-1608273219304.png?tyName=Old_zh.png"
      width="40%"
      height="40%"
    />
  </p>
</center>

###### 多语言字段

```javascript
appoffline: '当前网络不可用\n请检查手机网络';
```

<h3 id="h3Title">二、蓝牙离线</h3>

![BleOfflineWifi](https://images.tuyacn.com/rms-static/aff96f50-40ff-11eb-bf7f-5f284009845d-1608275247813.png?tyName=Ble_zh.png)

###### 多语言字段

```javascript
appoffline: '当前网络不可用\n请检查手机网络';
bluetoothOfflineTip: '请开启“蓝牙”';
alreadyKnow: '知道了';
checkHelp: '查看帮助';
deviceOffline: '设备连接失败';
backToHome: '返回首页';
openBle: '开启系统蓝牙';
openBleShare: '开启“蓝牙共享”';
openBleShareStep: '设置 > 涂鸦智能 > 开启蓝牙共享';
bluetoothShare: '蓝牙权限';
deviceOfflineHelp: '① 确保设备通电正常（或电池电量充足）\n② 将手机尽量贴近设备\n③ 若设备曾被其他手机连接过，请先断开连接。';
deviceOfflineHelpNew: '① 确保设备通电正常（或电池电量充足）\n② 将手机尽量贴近设备\n③ 若设备曾被其他手机连接过，请先断开，再进行';
offline_link: '重新连接';
```
