import './Header.css'

export default function Header() {
    return (
        <header>
            <h1 className="header-title">RGC CASINO</h1>
            <p className="header-sub">It's time to play!</p>

            <div className="menu-container">
                <a className="menu-link game1" href="#">GAME NAME</a>
                <a className="menu-link game3" href="#game-slot">SLOT</a>
                <a className="menu-link game2" href="#blackjack">BLACKJACK</a>
            </div>
        </header>
    )
}