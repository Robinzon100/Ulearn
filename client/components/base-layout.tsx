import React from "react";
import Navigation from "./navigation";
// import Footer from "./main_page_comps/footer";

const BaseLayout = (props) => {
    return (
        <>
            <Navigation />
            <main>{props.children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default BaseLayout;