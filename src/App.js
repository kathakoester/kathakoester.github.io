import Zemo from "./Components/Origin/Zemo";
import { ThemeProvider } from './Components/ThemeProvider'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const guide = createBrowserRouter([
    {
        path: '/',
        element: <Zemo />,
    },
  ]);

function App() {
    return (
        <>
            <ThemeProvider>
                <RouterProvider router={guide} />
            </ThemeProvider>
        </>
        
    );
}

export default App;
