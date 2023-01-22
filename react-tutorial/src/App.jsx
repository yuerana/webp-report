import { useEffect, useState } from "react";
import { catFacts } from "./api";
import { translate } from "./api";
import { catImg } from "./api";


function Header() {
    return (
        <header>
            <div className="head">
                    <h1 className="title">cat things</h1>
            </div>
        </header>
    );
}

function TranslatedFact(props) {
    let { text } = props;
    let [translatedText, setTexts] = useState("");

    translate(text).then((translated) => {
        setTexts(translated);
    })

    return (
        <div className="fact"> {translatedText}</div>
    )
}

function Main() {
    let [text, setTexts] = useState("");
    let [url, setUrl] = useState("");

    useEffect(() => {
        catFacts().then((facts) => {
            setTexts(facts);
        })
        catImg().then((img) => {
            setUrl(img);
        })
    }, [])

    function reload() {
        catFacts().then((facts) => {
            setTexts(facts);
        })
    }
    
    return (
        <main>
            <div className="text">
                猫が好きなお方にどうぞ
            </div>
            <div className="text"> クリックして猫の情報を更新しよう. </div>
            <div className="text">
                <form onSubmit={reload}>
                    <button>get</button>
                </form>
            </div>
            <div className="text">
                <img src={url} alt="" width="400px" />
            </div>
            <TranslatedFact text={text}/>
    </main>
    )
}

function Footer() {
    return (
        <footer>
            <div className="foot">
                <div>cat's picture comes from
                    <a href="https://cataas.com/#/"> CATAAS</a>
                </div>
                <div>cat's facts comes form
                    <a href="https://github.com/wh-iterabb-it/meowfacts"> meowfacts</a>
                </div>
                <div>translate API : 
                    <a href="https://qiita.com/satto_sann/items/be4177360a0bc3691fdf">Google翻訳APIを無料で作る方法</a>
                </div>
            </div>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
