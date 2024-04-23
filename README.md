# gwl-number-formatter
It is a package to format a phone number in various formats.


### Install

```
npm i gwl-number-formatter
```

### Why

```js
To format the input contact numbers in various formats as follow-:
xxxxxxxxxx
(xxx) xxx-xxxx
xxx-xxx-xxxx
(xxx)xxx-xxxx
(xxx)-xxx-xxxx
xxx.xxx.xxxx
xxx xxx xxxx
```

### Usage

```js
import {phoneNumberFormatter} from "gwl-number-formatter";

phoneNumberFormatter(contact_number,'2')
  .then((formattedNumber) => {
    var contact = formattedNumber; //In this case "contact" value would be (xxx) xxx-xxxx as second param is '2'.
  })
  .catch((error) => {
    console.error('Error formatting phone number:', error);
  });
```


### Formats

```js
For various formats, pass second parameter values between 1-7.
 
 phoneNumberFormatter(contact_number,'1')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = xxxxxxxxxx
  })

  phoneNumberFormatter(contact_number,'2')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = (xxx) xxx-xxxx
  })

  phoneNumberFormatter(contact_number,'3')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = xxx-xxx-xxxx
  })

phoneNumberFormatter(contact_number,'4')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = (xxx)xxx-xxxx
  })

  phoneNumberFormatter(contact_number,'5')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = (xxx)-xxx-xxxx
  })

  phoneNumberFormatter(contact_number,'6')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = xxx.xxx.xxxx
  })

  phoneNumberFormatter(contact_number,'7')
  .then((formattedNumber) => {
    var contact = formattedNumber; 
    // OUTPUT :
    // contact = xxx xxx xxxx
  })

```