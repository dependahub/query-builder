import test from 'ava';
import * as queryBuilder from './index.js';

test('insert function exists', t => {
	t.true(typeof queryBuilder.insert === 'function');
});

test('insert function generates correct SQL', t => {
	const sql = queryBuilder.insert('users', {name: 'John Doe', age: 30});
	t.is(sql, 'INSERT INTO users (`name`, `age`) VALUES (\'John Doe\', 30)');
});

test('batchInsert function exists', t => {
	t.true(typeof queryBuilder.batchInsert === 'function');
});

test('batchInsert function generates correct SQL', t => {
	const sql = queryBuilder.batchInsert('users', [
		{name: 'Alice', age: 25},
		{name: 'Bob', age: 30},
	]);
	t.is(sql, 'INSERT INTO users (`name`, `age`) VALUES (\'Alice\', 25), (\'Bob\', 30);');
});

test('update function exists', t => {
	t.true(typeof queryBuilder.update === 'function');
});

test('update function generates correct SQL', t => {
	const sql = queryBuilder.update('users', {name: 'Jane Doe', age: 28});
	t.is(sql, 'UPDATE users SET `name` = \'Jane Doe\', `age` = 28');
});
