# WebNmb
WebNmb，苇博匿名版。包含adnmb和webnmb内容。

## 设计要点
- 外观参照芦苇岛
- 服务器nmb.herokuapp.com
- 更加开放的饼干系统
- 加入A岛小游戏系统
- 加入markdown写作

## 难点
- 可行性验证：
	- 跨域x
	- 使用iframe套用户系统导入饼干
	- iframe级别的深度拷贝
	- history管理
- 岛内规则重新设置
- 评论串模式（嵌入博客的评论系统）
- A岛数据获取

*前端*
- 窗口动态管理
- iframe问题
- 长按
- 事件绑定
- 看图浮层
- 岛列表管理
- 最大页面宽度控制

*后端*
- 数据库管理
- 删除opds应用√
- 举报系统
- 图床系统
- 分享系统
- 饼干系统
- A岛数据转发

## WorkFlow

- A岛数据转发√
- 前端页面设计...
- 可行性验证：
	- iframe复制...Failed，会重新加载。
	- 用户系统套iframe...√，但是没法跨域读取cookie
	- iframe管理