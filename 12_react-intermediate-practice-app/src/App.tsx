import { Provider } from "@/components/ui/provider";
import { Router } from "@/components/router/Router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <Toaster />
      <Router />
    </Provider>
  );
}

export default App;
