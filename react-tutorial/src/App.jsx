import { useState } from "react";
export async function fetchImages(breed) {
    const response = await fetch(
      `https://acnhapi.com/v1/fish/${breed}`
    );
    const data = await response.json();
    return data.image_uri;
}

function Header() {
    return (
        <header className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">日本大学文理学部情報科学科 Webプログラミングの演習課題</h1>
                    <h5>5421057 朱劼</h5>
                </div>
            </div>
        </header>
    );
}
  
function Image(props) {
    return (
            <div className="column">
                <img src={props.src} alt="animal crossing" />
            </div>
    );
}

function Loading() {
    return <p>Loading...</p>;
}

function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
                    <div key={urls} className="column is-3">
                        <Image src={urls} />
                    </div>
        </div>
    );
}

function Main() {
    const [urls, setUrls] = useState(null);
    fetchImages("coelacanth").then((urls) => {
        setUrls(urls);
    });
    return (
        <main>
            <div className="box">
            <p className="is-full">本ページは Webプログラミングの演習課題であり,reactを用いてACNH APIからデータを取得する.</p>
            </div>
            <div className="box">
                <Gallery urls={urls}/>
                <p>シーラカンス</p>
            </div>
        </main>
    );
}
  
function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>All the data comes from ACNH. <a href="https://github.com/alexislours/ACNHAPI">More data about ACNH</a></p>
                <p>
                    <a href="https://acnhapi.com/">ACNH API</a>
                </p>
            </div>
        </footer>
    );
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