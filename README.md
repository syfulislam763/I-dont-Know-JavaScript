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

### <h2>String Methods</h2>
### String.formCharCode()

**Syntax:**<br/>
```javascript
    String.formCharCode(num1, ..., numN)
```
**Parameters:**<br/>
    num1, ..., numN,<br/>
    A sequence of numbers that are UTF-16 code units.<br/>
**Return Value:**<br/>
    A string of length N consisting of the N specified UTF-16 code units.<br/>
    
### 2. String.formCodePoint()

**Syntax:**<br/>
```javascript
    String.formCodePoint(num1, ..., numN)
```
**Parameters:**<br/>
    num1, ..., numN<br/>
    A sequence of code points<br>
**Return Value:**<br/>
    A string created by using the specified sequence of code points<br/>
**Exceptions:**<br/>
    A RangeError is thrown if an invalid Unicode code point is given.<br/>

### 3. String.prototype.charAt()

**Syntax:**<br/>
```javascript
    let character = str.charAt(index)
```
**Description:**<br/>
    Characters in a string are indexed from left to right.The index of the first character<br/> is 0 and the index of the last character is str.length - 1<br/> if the index you supply is out of this range javascript returns an empty string<br/> and if no index is provided to charAt() the default is 0.<br/>

### 4. String.prototype.charCodeAt()

**Syntax:**<br/>
```javascript
    let charCodeAt = str.charCodeAt(index)
```
**Parameters:**<br/>
**index** An integer greater than or equal to 0 and less than the **length** of the string.<br/>if **index** is not a number it defaults to 0

**Return Value:**<br/>
A number representing the UTF-16 code unit value of the character at the <br/> given **index**. if **index** is out of range **charCodeAt()** returns **NaN**



**End**<br/>
|no | question |
|----|----------------|
|1   | [what is the prototype chain?](#)|


**[Back to Top](#String)**

