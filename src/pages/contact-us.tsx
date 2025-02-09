import HeaderSection from "@/components/headerSection";
import type {NextPageWithLayout} from "./_app";
import type {ReactElement} from "react";
import Footer from "@/components/Footer";

const ContactUs: NextPageWithLayout = () => {
    return <h1>welcome</h1>;
};

ContactUs.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <HeaderSection />
            {page}
            <Footer />
        </>
    );
};

export default ContactUs;
