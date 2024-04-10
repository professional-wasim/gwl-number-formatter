export async function phoneNumberFormatter(phoneNumber: string) {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    if (!digitsOnly) {
      return '';
    }
  
    const areaCode = digitsOnly.slice(0, 3);
    const firstPart = digitsOnly.slice(3, 6);
    const secondPart = digitsOnly.slice(6, 10);
  
    let formattedPhoneNumber = "";
  
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
    return formattedPhoneNumber;
  }