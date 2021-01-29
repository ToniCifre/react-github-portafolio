import React from 'react';
import Helmet from "react-helmet";

const SEO = () => {
    return (
        <Helmet>
            {/*{!--HTML Meta Tags --}*/}
            <title>Toni Cifre Portfolio</title>
            <meta name="description"
                  content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>

            {/*{!--Google / Search Engine Tags --}*/}
            <meta itemprop="name" content="Toni Cifre Portfolio"/>
            <meta itemprop="description"
                  content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
            <meta itemprop="image" content=""/>

            {/*{!--Facebook Meta Tags --}*/}
            <meta property="og:url" content="tonicifre.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Toni Cifre Portfolio"/>
            <meta property="og:description"
                  content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
            <meta property="og:image" content=""/>

            {/*{!--Twitter Meta Tags --}*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Toni Cifre Portfolio"/>
            <meta name="twitter:description"
                  content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
            <meta name="twitter:image" content=""/>

        </Helmet>
    )
}

    export default SEO;
