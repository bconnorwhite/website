import serve from "@essence/page-server";
import { UIPlugin } from "@essence/ui";

serve({
  port: 5395,
  plugins: [
    UIPlugin()
  ]
});
