/**
 * Credit Card Mask
 * https://www.codewars.com/kata/5412509bd436bd33920011bc
 * 
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
 * 
 */
 function maskify(str) {
  let masket = ''
  for (var i = 0; i < str.length; i++) {
    masket += (str.length - i) > 4 ? '#' : str.charAt(i)
  }
  return masket
}

