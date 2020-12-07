# I-don't-Know-JavaScript
```javascript
    const practice = () => {Knowledge.JavaScript++}
    while(awake){practice();}
```
### String
The String Object is used to represent and manipulate a sequence of characters. (MDN),

### String Properties:
```javascript 
    1. String.length 
```

### String Methods
```javascript
    1. String.formCharCode()
```
**Syntax:**<br/>
    String.formCharCode(num1, ..., numN)
**Parameters:**<br/>
    num1, ..., numN,
    A sequence of numbers that are UTF-16 code units.
**Return Value:**<br/>
    A string of length N consisting of the N specified UTF-16 code units.
    
```javascript
    2. String.formCodePoint()
```
**Syntax:**<br/>
    String.formCodePoint(num1, ..., numN)
**Parameters:**<br/>
    num1, ..., numN
    A sequence of code points
**Return Value:**<br/>
    A string created by using the specified sequence of code points
**Exceptions:**<br/>
    A RangeError is thrown if an invalid Unicode code point is given.

```javascript
    3. String.prototype.charAt()
```
**Syntax:**<br/>
    let character = str.charAt(index)
**Description:**<br/>
    Characters in a string are indexed from left to right.The index of the first character<br/> is 0 and the index of the last character is str.length - 1<br/> if the index you supply is out of this range javascript returns an empty string<br/> and if no index is provided to charAt() the default is 0.

**End**<br/>
|no | question |
|----|----------------|
|1   | [what is the prototype chain?](#)|


**[Back to Top](#String)**

