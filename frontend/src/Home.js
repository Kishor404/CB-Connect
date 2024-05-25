import "./Style/Home.css"

import HomeSubNews from "./Components/Home-SubNews"
import HomePoster from "./Components/Home-Poster"

function Home(){
    return(
        <>
            <section>
                <div className="Home-Container">
                    <div className="Home-Left">
                        <p className="Home-LN">Latest News</p>
                        <HomeSubNews/>
                    </div>
                    <div className="Home-Right">
                        <HomePoster/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home