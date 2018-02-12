# rembox
移动端css的rem单位解决方案


## 安装


### 用script标签引入


下载[here](https://github.com/oxDesigner/rembox/blob/master/rembox.js)并引入:


``` html
<script src="*/rembox.js"></script>
```


### NPM
```
  $ npm i rembox -S
```


## 基本用法


**一定要手动在head标签中加上这句话：**

```html
  <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

### 设计稿宽度

设置设计稿宽度，当设计稿宽度为640时；默认750

```javascript
	rembox.config({
		design_width: 640
	})
```

### px换算rem

手动计算，100px为1rem

### rem换算px

750设计稿&&iphone6：

```javascript
	rembox.conver(1); // 50
```

750设计稿&&iphone5：

```javascript
	rembox.conver(1); // 42.666666666666664
```

640设计稿&&iphone6：

```javascript
	rembox.conver(1); // 58.59375
```

## 作者
  
  oxDesigner， 一个将近三十岁却依旧帅气的男人；
  
  如果你发现了bug，请及时提交Issues，亦可联系280441190@qq.com；
  
  如果你用着舒服，请给我一颗star