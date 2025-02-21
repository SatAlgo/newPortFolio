import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/SatAlgo' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/satyam-gaikwad-27a7a724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaGlobe />, path: 'https://satyamgaikwad.netlify.app/' },

]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
