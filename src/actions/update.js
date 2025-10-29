import {translateKey, translateValue} from '../utils/translate.js';

/**
 * Updates items in the specified table based on conditions.
 * - Input is automatically escaped.
 * - WHERE clause is not generated, please add it as needed.
 * @examples
 * ```javascript
 * import {update} from '@dependahub/query-builder';
 *
 * const updateSql = `${update('users', {name: 'Jane Doe', age: 28})} WHERE id = 1;`;
 * // -> UPDATE users SET `name` = 'Jane Doe', `age` = 28 WHERE id = 1;
 * ```
 * @param {string} table - The name of the table.
 * @param {Record<string, any>} item - The item with updated values.
 * @returns {string} - The SQL update query.
 */
export function update(table, item) {
	const setClauses = Object.entries(item).map(
		([key, value]) => `${translateKey(key)} = ${translateValue(value)}`,
	).join(', ');
	return `UPDATE ${table} SET ${setClauses}`;
}
