export default function uploadPhoto(fileName) {
  return new Promise((_, reject) => {
    reject(new Error(`Error: ${fileName} cannot be processed`));
  });
}

