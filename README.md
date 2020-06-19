# babel-plugin-debug

Plugin that transforms __DEBUG(\<MESSAGE\>) to console.log(\"[ DEBUG line:\", \<LINE\>, \"file:\", \<FILE\> \", \"function:\", \<FUCNTION\>, \" ]\", \<MESSAGE\>)

## Usage

```javascript
{
  loader: 'babel-loader',
  options: {
    plugins: [['babel-plugin-debug', {'production': false}]]
  }
}
```

To disable debugging and remove all __DEBUG, set production to true.
