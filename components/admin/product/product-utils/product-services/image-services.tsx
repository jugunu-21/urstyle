function encodeBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = (event.target as any).result.split(',')[1]; // Splitting at ',' and taking the second part to get rid of the data URL scheme
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
export { encodeBase64 }
function decodeBase64(image: string) {
  const binaryData = Buffer.from(image, 'base64')
  const blob = new Blob([binaryData])
  const fileName = 'example.jpg'; // Specify your file name
  const file = new File([blob], fileName, { type: 'image/jpg' });
  return file
}
export { decodeBase64 }
function dataURLtoBlob(dataurl: string): Blob | undefined {
  const arr = dataurl.split(',');
  if (!arr[0]) {
    console.error('Invalid data URL format');
    return undefined;
  }
  const mimeMatch = arr[0].match(/:(.*?);/);
  if (!mimeMatch || !mimeMatch[1]) {
    console.error('Failed to extract MIME type');
    return undefined;
  }
  const mime = mimeMatch[1];
  const bstr = atob(arr[1]);
  const n = bstr.length;
  const u8arr = new Uint8Array(n);

  for (let i = n - 1; i >= 0; i--) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  return new Blob([u8arr], { type: mime });
}


export { dataURLtoBlob}
function Base64toSrc (blob: string) {
  const dataUrl = `data:image/jpeg;base64,${blob}`
  return dataUrl

}
function srctoBase64 (dataUrl: string): string {
  const parts = dataUrl.split(',');
  if (parts.length === 2) {
    return parts[1]; // Return the base64 encoded string part
  } else {
    throw new Error('Invalid data URL format');
  }
}
export {Base64toSrc,srctoBase64 }
// function dataURLtoFile(dataurl, filename) {

//   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n),
//     blob = new Blob([u8arr], { type: mime });
//   return new File([blob], filename, { type: mime });
// }