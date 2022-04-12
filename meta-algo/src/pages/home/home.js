import React from 'react'
import Nav from '../../components/nav/nav'
import Metaal from '../../components/metaal/metaal'
import Intro from './home-components/intro.js'
import Info from './home-components/info.js'
import Footer from '../../components/footer/footer'

function Home() {

    return (
        <div>
            <Nav/>
            <Intro />
            <Metaal />
            <Info/>
            <Footer />
        </div>
    )
}
export default Home;