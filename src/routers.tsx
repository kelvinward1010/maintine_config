import { createBrowserRouter } from "react-router-dom";
import { Error, Layout } from "./components";
import { accordionconfigUrl, areachartconfigUrl, backgroundimageconfigUrl, homeUrl, imageconfigUrl, navlinkconfigUrl, signinUrl, signupUrl } from "./urls";
import { AccordionConfig, AreaChartConfig, BackgroundImageConfig, Home, ImageConfig, NavlinkConfig, SignIn, SignUp } from "./modules";





export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: homeUrl,
                element: <Home />
            },
            {
                path: accordionconfigUrl,
                element: <AccordionConfig />,
            },
            {
                path: navlinkconfigUrl,
                element: <NavlinkConfig />,
            },
            {
                path: backgroundimageconfigUrl,
                element: <BackgroundImageConfig />,
            },
            {
                path: imageconfigUrl,
                element: <ImageConfig />,
            },
            {
                path: areachartconfigUrl,
                element: <AreaChartConfig />
            }
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