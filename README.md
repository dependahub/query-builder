![](https://img.shields.io/badge/node-22.x-green)
[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&logoSize=auto)](https://github.com/xojs/xo)

# Query Builder

This is not an ORM. It's a simple query builder that generates and returns SQL.  
This package contains builders to assist with writing complex ```INSERT / UPDATE``` statements, designed for scenarios where ORMs cannot be used, such as with AWS RDS Data API.

> ＊ ```SELECT``` statements are not included.

## Install

```bash
npm i @dependahub/query-builder
```

## Examples

### Single Insert

```javascript
import {insert} from '@dependahub/query-builder';

const insertSql = insert('users', {name: 'John Doe', age: 30, isActive: true});
console.log(insertSql);
// OUTPUT: INSERT INTO users (`name`, `age`, `isActive`) VALUES ('John Doe', 30, 1)
```

### Batch Insert

```javascript
import {batchInsert} from '@dependahub/query-builder';

const users = [
  {name: 'Alice', age: 25, email: 'alice@example.com'},
  {name: 'Bob', age: 30, email: 'bob@example.com'},
  {name: 'Charlie', age: 35, isActive: false}
];

const batchInsertSql = batchInsert('users', users);
console.log(batchInsertSql);
// OUTPUT: INSERT INTO users (`name`, `age`, `email`, `isActive`) VALUES ('Alice', 25, 'alice@example.com', NULL), ('Bob', 30, 'bob@example.com', NULL), ('Charlie', 35, NULL, 0);
```

### Update

```javascript
import {update} from '@dependahub/query-builder';

const updateSql = update('users', {name: 'Jane Doe', age: 28, isActive: true});
const fullUpdateQuery = `${updateSql} WHERE id = 1;`;
console.log(fullUpdateQuery);
// OUTPUT: UPDATE users SET `name` = 'Jane Doe', `age` = 28, `isActive` = 1 WHERE id = 1;
```

### Drop Table

```javascript
import {dropTableIfExists} from '@dependahub/query-builder';

const dropSql = dropTableIfExists('users');
console.log(dropSql);
// OUTPUT: DROP TABLE IF EXISTS users
```

### Import All Functions

```javascript
import * as queryBuilder from '@dependahub/query-builder';

// Use any of the functions
const insertSql = queryBuilder.insert('products', {name: 'Laptop', price: 999.99});
const dropSql = queryBuilder.dropTableIfExists('temp_table');
```

### Data Type Handling

The query builder automatically handles different data types:

```javascript
import {insert} from '@dependahub/query-builder';

const complexData = {
  id: 1,                    // number -> 1
  name: 'John O\'Connor',   // string with quotes -> 'John O''Connor'
  isActive: true,           // boolean -> 1
  metadata: {key: 'value'}, // object -> '{"key":"value"}'
  deletedAt: null,          // null -> NULL
  tags: ['tag1', 'tag2']    // array -> '["tag1","tag2"]'
};

const sql = insert('users', complexData);
console.log(sql);
// OUTPUT: INSERT INTO users (`id`, `name`, `isActive`, `metadata`, `deletedAt`, `tags`) VALUES (1, 'John O''Connor', 1, '{"key":"value"}', NULL, '["tag1","tag2"]')
```
