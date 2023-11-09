export const formatString = (value: string) => {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&iacute;/g, 'í')
    .replace(/&aacute;/g, 'á')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/&eacute;/g, 'é')
    .replace(/&deg;/g, '°')
}
