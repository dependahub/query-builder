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
export function update(table: string, item: Record<string, any>): string;
//# sourceMappingURL=update.d.ts.map