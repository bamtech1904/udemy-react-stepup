import "./App.css";
import { Router } from "./components/router/Router";
import { UserProvider } from "./components/providers/UserProvider";

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};

export default App;
