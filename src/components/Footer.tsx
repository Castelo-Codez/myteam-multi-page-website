import LeftLayer from "./FooterLeftLayer";
import RightLayer from "./FooterRightLayer";

export default function Footer() {
    return (
        <footer className=" py-16 bg-color-very-dark-green">
            <div className=" container grid grid-cols-1 gap-y-5 sm:gap-10 xl:grid-cols-2">
                <LeftLayer />
                <RightLayer />
            </div>
        </footer>
    );
}
