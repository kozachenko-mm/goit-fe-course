const uuidv1 = require("uuid/v1");
import * as storage from "../services/storage";

export default class Model {
  constructor() {
    this.items = this.getBookmark();
    // console.log(this.items);
  }
  getBookmark() {
    return storage.get();
  }

  addBookmark(value) {
    const obj = {
      id: uuidv1(),
      url: value
    };
    this.items.unshift(obj);
    storage.set(this.items);
    console.log(value);

    return obj;
  }

  delBookmark(id) {
    this.items = this.items.filter(el => el.id !== id);

    storage.set(this.items);
  }
}
