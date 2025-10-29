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
export function insert(table: string, item: Record<string, any>): string;
//# sourceMappingURL=insert.d.ts.map