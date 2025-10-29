
/**
 * Translates a key to its SQL representation.
 * @param {string} key - The key to translate.
 * @returns {string} - The SQL representation of the key.
 */
export function translateKey(key) {
	return `\`${key}\``;
}

/**
 * Translates a value to its SQL representation.
 * @param {any} value - The value to translate.
 * @returns {string|number} - The SQL representation of the value.
 */
export function translateValue(value) {
	if (value === null || value === undefined) {
		return 'NULL';
	}

	switch (typeof value) {
		case 'string': {
			// Escape single quotes by doubling them
			return `'${value.replaceAll('\'', '\'\'')}'`;
		}

		case 'number': {
			return value;
		}

		case 'boolean': {
			return value ? 1 : 0;
		}

		// JSON Column
		default: {
			return JSON.stringify(value);
		}
	}
}
