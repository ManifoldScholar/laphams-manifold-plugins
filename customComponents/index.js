import PreFooter from "./src/components/PreFooter";
import FooterLogo from "./src/components/FooterLogo";
import { registerPlugin, registerComponent } from "actions/plugin";

export default function initialize({ dispatch }) {
  dispatch(registerPlugin("customComponents"));
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Layout.PreFooter",
      PreFooter
    )
  );
  dispatch(
    registerComponent(
      "customComponents",
      "Frontend.Components.Layout.FooterLogo",
      FooterLogo
    )
  );
}
