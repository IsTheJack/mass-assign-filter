# mass-assign-filter Helper Module
A helper module for Node.js that sanitize objects based in the white list array.

Example 1:
```javascript
    const massAssign = require('mass-assign-filter');
    // massAssign(object, array[, isWhiteList = true]);
    
    const person = {
        name: "Roberto",
        age: 22,
        admin: true,
    };
    
    // Using black list
    const blackList = ['admin'];
    console.log(massAssign(person, blacklist, false));
    // => { name: "Roberto", age: 22 }
    
    // Using white list
    const whiteList = ['name', 'age'];
    console.log(massAssign(person, whitelist));
    // => { name: "Roberto", age: 22 }
```

Example 2 (White List):
```javascript
    // With White List
    const mongoose = require('mongoose');
    const Person = mongoose.model('Person');
    const massAssign = require('mass-assign-filter');
    
    module.exports = () => {
      return {
    
        /**
        * ...
        **/
    
        create(req, res) {
          const whiteList = ['name', 'age'];
          Person.create(massAssign(req.body, whiteList), (err, question) => {
            if (err) res.status(400).json(err);
            else res.status(201).json(question);
          });
        },
      };
    };
```

Example 3 (Black List):
```javascript
    // With Black List
    
    const mongoose = require('mongoose');
    const Person = mongoose.model('Person');
    const massAssign = require('mass-assign-filter');
    
    module.exports = () => {
      return {
    
        /**
        * ...
        **/
    
        create(req, res) {
          const blackList = ['admin'];
          Person.create(massAssign(req.body, blackList, false), (err, question) => {
            if (err) res.status(400).json(err);
            else res.status(201).json(question);
          });
        },
      };
    };
```
