import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
