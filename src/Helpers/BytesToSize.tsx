export function BytesToSize (bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const sizVal = Math.floor(Math.log(bytes) / Math.log(1024))
  const i = Number(sizVal);
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}
