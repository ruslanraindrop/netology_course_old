export default function checkPaymentSystem(firstNumber) {
  let result;

  if (firstNumber.startsWith('2')) {
    result = 'mir';
  }

  if (firstNumber.startsWith('4')) {
    result = 'visa';
  }

  if (firstNumber.startsWith('34') || firstNumber.startsWith('37')) {
    result = 'americanexpress';
  }

  if (firstNumber.startsWith('30') || firstNumber.startsWith('36') || firstNumber.startsWith('38')) {
    result = 'dinersclub';
  }

  if (firstNumber.startsWith('50') || firstNumber.startsWith('56') || firstNumber.startsWith('57') || firstNumber.startsWith('58') || firstNumber.startsWith('63') || firstNumber.startsWith('67')) {
    result = 'maestro';
  }

  if (firstNumber.startsWith('51') || firstNumber.startsWith('52') || firstNumber.startsWith('53') || firstNumber.startsWith('54') || firstNumber.startsWith('55')) {
    result = 'mastercard';
  }

  if (firstNumber.startsWith('31') || firstNumber.startsWith('35')) {
    result = 'jcb';
  }

  if (firstNumber.startsWith('62')) {
    result = 'unionpay';
  }

  if (firstNumber.startsWith('60')) {
    result = 'discover';
  }

  return result;
}
