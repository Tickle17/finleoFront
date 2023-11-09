import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class Store {
  count = 0;
  data = [];
  loading = false;
  modal = false;
  modalContent = {};

  constructor() {
    makeAutoObservable(this);
  }

  incrementCount() {
    this.count++;
  }

  openModal(content: any) {
    this.modal = true;
    this.modalContent = content;
  }

  closeModal() {
    this.modal = false;
    this.modalContent = {};
  }

  async fetchData() {
    try {
      this.loading = true;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      runInAction(() => {
        this.data = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

const store = new Store();
export default store;
