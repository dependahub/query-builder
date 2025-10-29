import {translateKey, translateValue} from '../utils/translate.js';

/**
 * Inserts multiple items into the specified table.
 * - Input is automatically escaped.
 * @param {string} table - The name of the table.
 * @param {Record<string, any>[]} items - The items to insert.
 * @returns {string} - The SQL batch insert query.
 * @examples
 * ```javascript
 * import {batchInsert} from '@dependahub/query-builder';
 *
 * const batchInsertSql = batchInsert('users', [
 *   {name: 'Alice', age: 25},
 *   {name: 'Bob', age: 30},
 * ]);
 * // -> INSERT INTO users (`name`, `age`) VALUES ('Alice', 25), ('Bob', 30);
 * ```
 */
export function batchInsert(table, items) {
	const keys = new Set();
	for (const item of items) {
		for (const key of Object.keys(item)) {
			keys.add(key);
		}
	}

	const columns = [...keys].map(key => translateKey(key)).join(', ');
	const values = items.map(item => {
		const rowValues = [...keys].map(key => translateValue(item[key])).join(', ');
		return `(${rowValues})`;
	}).join(', ');

	return `INSERT INTO ${table} (${columns}) VALUES ${values};`;
}
