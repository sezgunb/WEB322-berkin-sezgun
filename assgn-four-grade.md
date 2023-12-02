# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |    |
| ----------------------------------------------------- | ------ |----|
| DB                                                    |        |    |
| - neondb created                                      | 10     | 10 |
| Routes                                                |        |    |
| - api CRUD endpoints added for orders                 | 10     | 10 |
| Server                                                |        |    |
| - sequelize or mongo dependencies added               | 10     | 10 |
| - successfully connect to db                          | 10     | 10 |
| Create Database Objects Definitions                   |        |    |
| - User                                                | 10     | 10 |
| - Product                                             | 10     | 10 |
| - Order                                               | 10     | 10 |
| Change your service classes use your Database objects |        |    |
| - User                                                | 10     | 6  |
| - Product                                             | 10     | 6  |
| - Order                                               | 10     | 6  |

## Total Score: 88 / 100
Overall you've done well.  Unfortunately you have one big flaw in the 
service.  Currently, you export the models like this:

```
 models: {
        User,
        Product,
        Order,
    }
```

But then try to require them like this:


```
const { User, Order } = require('../models/db');
```


To make this run I made the following change:


```module.exports = {
    connect,
    sync,
    User,
    Product,
    Order,
}
```
