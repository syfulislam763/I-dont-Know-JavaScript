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
### 1. String.formCharCode()

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
A number representing the UTF-16 code unit value of the character at the <br/> given **index**. if **index** is out of range **charCodeAt()** returns **NaN**<br/>

### 5. String.prototype.codePointAt()

**Syntax:**<br/>
```javascript
    let codePointAt = str.codePointAt(pos)
```
**Description:**<br/>
if there is no element at the specified position, **undefined** is returned.<br/> If no UTF-16 surrogate pair begins at **pos** the code unit at **pos** is returned.<br/>


### 6. String.prototype.concat()

**Syntax:**<br/>
```javascript
    let strConcat = str.concat(str1, ..., strN)
```
**Description:**<br/>
The **concat()** function concatenates the arguments to the calling string and return a new string.<br/> Changes to the original string or the returned string don't affect the other.<br/>If the arguments are not of the type string, the are converted to string values before concatenating.<br/>

**Note:**  Its not recommended.

### 7. String.prototype.endsWith()

**Syntax:** <br/>
```javascript
    let endsWith = str.endsWith(searchString, length)
```
**Parameters:**<br/>
**searchString** The characters to be searched for at the ed of **str**<br/>**length is optional** If provided it is used as the length of **str** Defaults to **str.length**<br/>

**Return Value:**<br/>
    **true** if the given characters are found at the end of the string otherwise **false**<br/>

### 8. String.prototype.includes()

**Syntax:**<br/>
```javascript
    let ifInclude = str.includes(searchString, positon)
```
**Parameters:**<br/>
**searchString** A string to be searched for within **str** and **searchString** case-sensitive<br/>
**position is optional** the position within the string at which to begin searching for **searchString**.(Defaults to 0)<br/>

**Return Value:**<br/>
**true** if the search string is found anywhere within the given string.otherwise **false** if not<br/>

### 9. String.prototype.indexOf()

**Syntax:**<br/>
```javascript
    let index = str.indexOf(searchVlaue, fromIndex)
```
**Parameters:**<br/>
**searchValue** The string value to search for.<br/>
if no string is explicitly provided, **searchValue will be 'undefined'** and this value will be searched for in **str**. and **searchValue is case-sensitive**<br/>
**fromIndex is optional** An integer representing the index at which to start the search. Defaults to 0.<br/>

**Return value:**<br/>
The index of the first occurrence of **searchValue** or **-1** if not found<br/>

### 10. String.prototype.lastIndexOf()

**Syntax:**<br/>
```javascript
    let index = str.lastIndexOf(searchValue, fromIndex)
```

**Parameters:**<br/>
**searchValue** A string representing the value to search for. if **searchValue** is an empty string <br/> then **fromIndex** is returnd<br/>

**fromIndex is optional** The index of the last character in the string to be considered <br/> as the begining of a match. the default value is **+Infinity** . if **formIndex >= str.length** the whole <br/> string is searched.if **fromIndex < 0** the behavior will be the same as if would be 0<br/>

**Return Value:**<br/>
The index of the last occurrence of **searchValue**. **-1** if not found.<br/>





**[Back to Top](#String)**

