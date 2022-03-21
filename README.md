# whistle.json5
用于转换规则配置里面的 JSON5 Value，背景参见：https://github.com/avwo/whistle/issues/706

# 安装
> 需要安装最新版的 Whistle：https://wproxy.org/whistle/update.html

安装插件：
``` sh
w2 i whistle.json5
```

# 用法
1. 在 Whistle 的 Values 里面创建 Key-Value：
  <img width="603" alt="image" src="https://user-images.githubusercontent.com/11450939/159232935-aed8448a-c01a-443a-8bcd-75b07ecada0d.png">

2. 用 `protocol://$json5/xxx` 代替 `protocol://{xxx}`：
  ``` txt
  ke.qq.com/test.html file://$json/test.json
  ```
3. 访问 https://ke.qq.com/test.html
<img width="513" alt="image" src="https://user-images.githubusercontent.com/11450939/159233044-2fc765c2-e4c1-465c-ad15-b9d0235bb437.png">

# License
[MIT](./LICENSE)
