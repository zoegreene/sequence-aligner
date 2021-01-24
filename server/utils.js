/**
 * Returns the value stored in cookies for the given parameter.
 *
 * @param {*} name - The name of the cookie.
 * @return {*}
 */
const getCookieValue = (name) => {
  let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
  return result ? result.pop() : ""
}

module.exports = {
  getCookieValue
};
