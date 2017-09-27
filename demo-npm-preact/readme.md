# xxx for react

![preview](preview.gif)

**install**

`npm install --save-dev xxx style-loader css-loader`

**webpack.config.js**

```
// add loader
{
    test: /\.css$/,
    loader: "style-loader!css-loader"
}
```

**import**

import XXX from 'xxx'

**use**

```
<XXX />
```

> 1: defaultValue

> 2: data

> 3: the func to get item

```
3(item) {
    console.log(item)
}
```
