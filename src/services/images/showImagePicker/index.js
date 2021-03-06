import ImagePicker from 'react-native-image-picker';

import { app } from '../../../utils';
import { images } from '../../../config';

export default function showImagePicker() {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(images.imagePickerOptions, ({ uri, error }) => {
      if (error) {
        reject(app.createError(error));
      } else {
        const response = uri && { uri }; // if the user cancels, there is no response
        resolve(response);
      }
    });
  });
}
