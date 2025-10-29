
/**
 * `DROP TABLE IF EXISTS ${table}`
 * @examples
 * ```javascript
 * import {dropTableIfExists} from '@dependahub/query-builder';
 *
 * const dropSql = dropTableIfExists('users');
 * // -> DROP TABLE IF EXISTS users;
 * ```
 * @param {string} table
 * @returns {string}
 */
export function dropTableIfExists(table) {
	return `DROP TABLE IF EXISTS ${table}`;
}
