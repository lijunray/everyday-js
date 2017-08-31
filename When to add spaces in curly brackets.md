## When to add spaces in curly brackets?

### See some examples:
Wrong
```
const div = <div style={ divStyle }></div>;
```
True
```
const div = <div style={divStyle}></div>;
```

Wrong
```
const div = <div style={{width: 100}}></div>;
```
True
```
const div = <div style={{ width: 100 }}></div>;
```

Wrong
```
const div = <div>{ child }</div>;
```
True
```
const div = <div>{child}</div>;
```


### Conclusion:
The main principle is that if tranditionally this line should be a new line, there should be a space in curly brackets. But if the purpose is just to tell it's a variable or expression, there should not be space.

### Why wrong?
```
const div = <div style={ divStyle }></div>;
```
Explanation: divStyle is a variable, curly brackets here is just to tell you code in them is just a variable, so there should not be space.


### Why true?
Explanation: { width: 100 } here is an object, and tranditionally it's written to a new line, but for saving space, we write the short object to the same line, so there should be space around its content. But there shouldn't be any space outside the object since it just means inside is a variable.
```
const div = <div style={{ width: 100 }}></div>;
const divStyle = {
  width: 100
};
```

### However
Whether you add space or not is just your style, some companies always add space
whatever the content is. It is always correct as long as you follow your style strictly. 
:)

