export const convertNumbers = (number) => {
  switch (number) {
    case 1:
      return '';
    case 2:
      return 'שני';
    case 3:
      return 'שלושת';
    case 4:
      return 'ארבעת';
    case 5:
      return 'חמשת';
    case 6:
      return 'ששת';
    case 7:
      return 'שבעת';
    case 8:
      return 'שמונת';
    case 9:
      return 'תשעת';
    default:
      return number;
  }
};
