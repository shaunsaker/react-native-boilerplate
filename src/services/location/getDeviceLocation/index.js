import { app } from '../../../utils';

export default function getDeviceLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const response = { coords };
        resolve(response);
      },
      (error) => {
        reject(app.createError(error));
      },
    );
  });
}
