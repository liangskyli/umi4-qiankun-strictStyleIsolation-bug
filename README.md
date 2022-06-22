## Usage

主应用
```bash
$ cd master
$ yarn
$ yarn start
```

子应用
```bash
$ cd slave
$ yarn
$ yarn start
```


打开页面：http://127.0.0.1:8000/slave/page1


master/app.ts
里注释如下代码就正常
```ts
fetch: async (url: any, ...args: any) => {
  if ((url as string).indexOf('//res.wx.qq.com/open/js/jweixin-1.6.0.js') > -1) {
    return {
      // @ts-ignore
      async text() {
        return '';
      },
    };
  }

  return window.fetch(url, ...args);
},
```




