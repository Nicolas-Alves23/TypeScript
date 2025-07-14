import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt  } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoIosMail } from "react-icons/io"
function Footer() {
    return (
        <footer>
            {/* Box de cima do footer, na onde existira três informações importantes */}
            <div className="flex">

                {/* 3 icones ficaram dispostos */}
                <div>
                    <BsFillTelephoneFill size={45} color="#000000"></BsFillTelephoneFill>
                </div>
                <div>
                    <IoIosMail size={45} color="#000000"></IoIosMail>
                </div>
                <div>
                    <FaMapMarkerAlt size={45} color="#000000"></FaMapMarkerAlt>
                </div>

            </div>

            {/* Linha entre as caixas  */}
            <div>

            </div>

            {/* Essa Box de baixo dos 3 icons  */}
            <div className="">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Ultima Box com os 4 Links */}
            <div className="flex ">
                <div className="w-20 flex-1 justify-items-center">
                    <FaInstagram size={45} color="#000000"></FaInstagram>
                </div>
                <div className="w-20 flex-1 justify-items-center">
                     <FaGithub size={45} color="#000000"></FaGithub>
                </div>
                <div className="w-20 flex-1 justify-items-center">
                     <FaLinkedin size={45} color="#000000"></FaLinkedin>
                </div>
                <div className="w-20 flex-1 justify-items-center">
                     <FaTwitter size={45} color="#000000"></FaTwitter>
                </div>
            </div>
        </footer>
    )
}

export default Footer