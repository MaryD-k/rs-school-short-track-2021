/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const re = /@[a-zA-Z0-9-]+.[a-zA-Z0-9]+/;
  const result = re.exec(email);
  return result[0].slice(1);
}

module.exports = getEmailDomain;
