/**
 * 去除字符串两端的空格
 */
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
