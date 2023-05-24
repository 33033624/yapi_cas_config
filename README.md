## YApi_cas_config 基于 yapi 的配置化 cas

- 运行
  <a href="http://yapi.smart-xwork.cn/doc/documents/redev.html">参考 yapi 二次开发文档</a>

- json.config 生成后更改配置

```
  "cas": {
    "open": false, // 是否开启 cas
    "LOGIN_SERVER": "", // 重定向cas登录地址
    "AUTH_SERVER": "", // 通过ticket同步cas用户信息接口地址
    "emailPostfix": "@163.com"
  }
```
