---
title: 查看更多
description: A guide in my Starlight docs site.
sidebar:
  order: 3
---


## 国际化域名（Internationalized Domain Names, IDN）

国际化域名，为突破传统域名体系限制而生，旨在允许使用中文、emoji、阿拉伯文、日文等非拉丁字母注册，其核心原理是将非拉丁字符转换为由ASCII字符组成的Punycode编码，如“🍔.中国”对应的就是“xn--ui8h.xn--fiqs8s”。

Punycode编码遵循RFC 3492标准，在确保DNS系统兼容的同时，由浏览器自动将Punycode转译为用户可读的网址，日常编解码可使用在线转换工具，如 [Punycoder](https://punycoder.com/)，输入“😊.com”就会生成“xn--o28h.com”，同时也可进行反解。注册域名时，需要我们在注册商的网站上填写这个以“xn--”开头的转化后的域名，注册好以后就可在浏览器地址栏直接使用emoji地址访问了。

不过，使用中需注意兼容性，目前部分Chromium系浏览器地址栏还不能直观显示，仅能显示对应的Punycode编码，IDN邮箱地址因支持度有限，也不建议日常使用。

由于IDN的引入，也给互联网络带来了潜在风险，上网时，我们尤其需要警惕同形异义字符（Homoglyphs），如希腊字母“α”与拉丁字母“a”带来的钓鱼风险，中文因简繁体不同，则需警惕恶意抢注带来的混淆。