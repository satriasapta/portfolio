import logo from "../assets/Logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-3xl font-bold">S S</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/satria-sapta"><FaLinkedin /></a>
                <a href="https://github.com/satria-sapta"><FaGithub /></a>
                <a href="https://instagram.com/satria.sapta"><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar