import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    user: {
      name: "",
    },
  },
});

export default app;
