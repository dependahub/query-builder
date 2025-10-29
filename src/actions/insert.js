import {translateKey, translateValue} from '../utils/translate.js';

/**
 * Inserts a single item into the specified table.
 * - Input is automatically escaped.
 * @param {string} table - The name of the table.
 * @param {Record<string, any>} item - The item to insert.
 * @returns {string} - The SQL insert query.
 * @examples
 * ```javascript
 * import {insert} from '@dependahub/query-builder';
 *
 * const insertSql = insert('users', {name: 'John Doe', age: 30});
 * // -> INSERT INTO users (`name`, `age`) VALUES ('John Doe', 30);
 * ```
 */
export function insert(table, item) {
	const keys = Object.keys(item);
	const columns = keys.map(key => translateKey(key)).join(', ');
	const values = Object.values(item).map(value => translateValue(value)).join(', ');
	return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
}
