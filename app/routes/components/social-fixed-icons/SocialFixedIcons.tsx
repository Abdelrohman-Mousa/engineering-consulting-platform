import "./social-fixed-icons.scss";

import whatsapp from "../../../../src/animations/whatsapp.json";
import instagram from "../../../../src/animations/Instagram.json";

import Lottie from "lottie-react";

const SocialFixedIcons = () => {

    return (
        <div className="social-fixed-icons">

            <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <Lottie
                    animationData={whatsapp}
                    loop={true}
                    className="social-lottie"
                />
            </a>

            <a
                href="https://instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <Lottie
                    animationData={instagram}
                    loop={true}
                    className="social-lottie"
                />
            </a>

        </div>
    )
}

export default SocialFixedIcons;