import { routeName as chat } from "./routes/chat";
import { routeName as login } from "./routes/login";
import { routeName as welcome } from "./routes/welcome";

export const pages = {
  chat,
  login,
  welcome
} as const;
