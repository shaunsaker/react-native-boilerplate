export default function get(action) {
  return new Promise((resolve) => {
    fetch(action.meta.url)
      .then((response) => {
        resolve({
          payload: response,
        });
      })
      .catch((error) => {
        resolve({
          payload: new Error(error),
          error: true,
        });
      });
  });
}