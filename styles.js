import path from "path";

// Changes to this file will not be picked up by `yarn watch` because this file is read
// during webpack startup.
export default {
  variables: path.resolve(__dirname, "customStyles/_variables.scss")
};
