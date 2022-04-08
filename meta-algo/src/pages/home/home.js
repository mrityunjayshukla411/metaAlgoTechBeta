import React from 'react'
import Nav from '../../components/nav/nav'
import Metaal from '../../components/metaal/metaal'
import Intro from './home-components/intro.js'
function Home() {

    return (
        <div>
            <Nav/>
            <Intro />
            {/* <Metaal /> */}
        </div>
    )
}
export default Home;