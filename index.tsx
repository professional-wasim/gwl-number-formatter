export async function phoneNumberFormatter(phoneNumber: string, type: string) {
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  if (!digitsOnly) {
    return '';
  }

  const areaCode = digitsOnly.slice(0, 3);
  const firstPart = digitsOnly.slice(3, 6);
  const secondPart = digitsOnly.slice(6, 10);

  let formattedPhoneNumber = "";

  // For xxxxxxxxxx Format
  if (type == '1') {
    if (areaCode) {
      formattedPhoneNumber += `${areaCode}`;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `${secondPart}`;
    }
  }
  // For (xxx) xxx-xxxx Format
  else if (type == '2') {
    if (areaCode) {
      formattedPhoneNumber += `(${areaCode}) `;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `-${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    if (formattedPhoneNumber == `(${areaCode}) `) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
      formattedPhoneNumber = formattedPhoneNumber.slice(0, -1);
    }
  }
  // For xxx-xxx-xxxx Format
  else if (type == '3') {
    if (areaCode) {
      formattedPhoneNumber += `${areaCode}-`;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `-${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    if (formattedPhoneNumber == `${areaCode}-`) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
      formattedPhoneNumber = formattedPhoneNumber.slice(0, -1);
    }
  }
  // For (xxx)xxx-xxxx Format
  else if (type == '4') {
    if (areaCode) {
      formattedPhoneNumber += `(${areaCode})`;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `-${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    if (formattedPhoneNumber == `(${areaCode})`) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
      formattedPhoneNumber = formattedPhoneNumber.slice(0, -1);
    }
  }
  // For (xxx)-xxx-xxxx Format
  else if (type == '5') {
    if (areaCode) {
      formattedPhoneNumber += `(${areaCode})-`;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `-${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    if (formattedPhoneNumber == `(${areaCode})-`) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
      formattedPhoneNumber = formattedPhoneNumber.slice(0, -2);
    }
  }
  // For xxx.xxx.xxxx Format
  else if (type == '6') {
    if (areaCode) {
      formattedPhoneNumber += `${areaCode}.`;
    }
    if (firstPart) {
      formattedPhoneNumber += `${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += `.${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    if (formattedPhoneNumber == `${areaCode}.`) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
      formattedPhoneNumber = formattedPhoneNumber.slice(0, -1);
    }
  }
  // For xxx xxx xxxx Format
  else if (type == '7') {
    if (areaCode) {
      formattedPhoneNumber += `${areaCode}`;
    }
    if (firstPart) {
      formattedPhoneNumber += ` ${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += ` ${secondPart}`;
    }
    // Remove last character if backspace is pressed and only areaCode is remaining in input field
    // if (formattedPhoneNumber == `${areaCode} `) {
    //   formattedPhoneNumber = formattedPhoneNumber.replace(/[ ]/g, '');
    //   formattedPhoneNumber = formattedPhoneNumber.slice(0, -1);
    // }
  }
  else {
    console.log(`Invalid second parameter: ${type}`);
    console.log('Please enter between 1-7');
    return;
  }

  return formattedPhoneNumber;
}