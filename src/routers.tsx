import { createBrowserRouter } from "react-router-dom";
import { Error, Layout } from "./components";
import { homeUrl, signinUrl, signupUrl } from "./urls";
import { Home, SignIn, SignUp } from "./modules";





export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: homeUrl,
                errorElement: <Error />,
                element: <Home />
            },
        ]
    },
    {
        path: signupUrl,
        errorElement: <Error />,
        element: <SignUp />
    },
    {
        path: signinUrl,
        errorElement: <Error />,
        element: <SignIn />
    }
])