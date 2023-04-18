import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
};
