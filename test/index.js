var tape = require("tape"),
    arrayMap = require("..");


tape("arrayMap(array, callback) creates a new array with the results of calling a provided function on every element in this array", function(assert) {
    assert.deepEquals(
        arrayMap([0, 1, 2, 3, 4], function(value, index) {
            return value + index;
        }), [0, 2, 4, 6, 8]
    );
    assert.end();
});
