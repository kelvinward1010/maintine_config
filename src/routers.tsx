import { createBrowserRouter } from "react-router-dom";
import { Error, Layout } from "./components";
import { accordionconfigUrl, areachartconfigUrl, backgroundimageconfigUrl, barchartconfigUrl, blockquoteconfigUrl, codehighlightconfigUrl, donutchartconfigUrl, highlightconfigUrl, homeUrl, imageconfigUrl, linechartconfigUrl, navlinkconfigUrl, notificationssystemconfigUrl, piechartconfigUrl, signinUrl, signupUrl } from "./urls";
import { AccordionConfig, AreaChartConfig, BackgroundImageConfig, BarChartConfig, BlockQuoteConfig, CodeHighLightConfig, DonutChartConfig, HighlightConfig, Home, ImageConfig, LineChartConfig, NavlinkConfig, NotificationsSystemConfig, PieChartConfig, SignIn, SignUp } from "./modules";





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
            },
            {
                path: barchartconfigUrl,
                element: <BarChartConfig />
            },
            {
                path: linechartconfigUrl,
                element: <LineChartConfig />
            },
            {
                path: donutchartconfigUrl,
                element: <DonutChartConfig />
            },
            {
                path: piechartconfigUrl,
                element: <PieChartConfig />
            },
            {
                path: codehighlightconfigUrl,
                element: <CodeHighLightConfig />
            },
            {
                path: notificationssystemconfigUrl,
                element: <NotificationsSystemConfig />
            },
            {
                path: blockquoteconfigUrl,
                element: <BlockQuoteConfig />
            },
            {
                path: highlightconfigUrl,
                element: <HighlightConfig />
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