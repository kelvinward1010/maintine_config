import { createBrowserRouter } from "react-router-dom";
import { Error, Layout } from "./components";
import { 
    accordionconfigUrl, 
    areachartconfigUrl, 
    backgroundimageconfigUrl, 
    barchartconfigUrl, 
    blockquoteconfigUrl, 
    codehighlightUrl, 
    donutchartconfigUrl, 
    highlightconfigUrl, 
    homeUrl, 
    imageconfigUrl, 
    linechartconfigUrl, 
    navlinkconfigUrl, 
    notificationssystemUrl, 
    piechartconfigUrl,
    richtexteditorUrl,
    signinUrl,
    signupUrl,
} from "./urls";
import { 
    AccordionConfig, 
    AreaChartConfig, 
    BackgroundImageConfig, 
    BarChartConfig, 
    BlockQuoteConfig, 
    CodeHighLight, 
    DonutChartConfig, 
    HighlightConfig, 
    Home, 
    ImageConfig, 
    LineChartConfig, 
    NavlinkConfig, 
    NotificationsSystem, 
    PieChartConfig, 
    RichTextEditorConfig, 
    SignIn, 
    SignUp,
} from "./modules";



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
                path: codehighlightUrl,
                element: <CodeHighLight />
            },
            {
                path: notificationssystemUrl,
                element: <NotificationsSystem />
            },
            {
                path: blockquoteconfigUrl,
                element: <BlockQuoteConfig />
            },
            {
                path: highlightconfigUrl,
                element: <HighlightConfig />
            },
            {
                path: richtexteditorUrl,
                element: <RichTextEditorConfig />
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