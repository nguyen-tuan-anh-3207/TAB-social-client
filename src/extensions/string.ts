import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'

export default {
  strToSnakeCase(str: string): string {
    if (!str || str.length === 0) {
      return str
    }

    return snakeCase(str)
  },

  strToCamelCase(str: string): string {
    if (!str || str.length === 0) {
      return str
    }

    return camelCase(str)
  }
}
