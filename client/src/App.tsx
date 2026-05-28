import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import.meta.env.BASE_URL = "/" in dev, "/EstudoSebrae/" in production build
const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" or "/EstudoSebrae"

function AppRouter() {
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
