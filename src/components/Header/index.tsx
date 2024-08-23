import React from "react";
import PokeballSvg from '../../assets/images/pokeball.svg'

const Header = () => {
    return <header className="h-20 bg-white flex justify-center items-center">
                <img src={PokeballSvg} width={60} height={60} alt="Imagem de pokebola"/>
            </header>
}

export default Header