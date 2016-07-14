array-map
=======

array map for the browser and node.js


```javascript
var arrayMap = require("@nathanfaucett/array-map");


var array = arrayMap([1, 2, 3, 4, 5, 6], function(value, index, array) {
    return value % 2 === 0;
});

array === [2, 4, 6];
```
