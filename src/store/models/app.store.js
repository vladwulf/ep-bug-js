import { action, thunk } from "easy-peasy";

const appStore = {
  showModal: false,
  toggleModal: action((state) => {
    console.log("toggleModal called");
    state.showModal = !state.showModal;
  }),
  someAction: action((state) => {
    console.log("action called from app store");
  }),
  someThunk: thunk((actions) => {
    console.log("thunk called from app store");
    actions.toggleModal();
  }),
};

export { appStore };
