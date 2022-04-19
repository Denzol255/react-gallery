import axios from "axios";

export default class PhotoServices {
  static async getAll() {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: 24,
        },
      }
    );
    return responce;
  }
  static async getById(id) {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/" + id
    );
    return responce;
  }
}
