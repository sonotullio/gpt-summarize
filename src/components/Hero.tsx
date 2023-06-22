import {logo} from "../assets";


const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button type="button" className="black_btn" onClick={() => window.open('https://github.com/sonotullio')}>GitHub</button>
            </nav>

            <h1 className="head_text">
                Sumarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open-source tool that summarizes articles using OpenAI's GPT-4.
            </h2>
        </header>
    );
}

export default Hero;