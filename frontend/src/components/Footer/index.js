
import { useState } from 'react';
import './Footer.css'
const Footer = () => {
    const [foot, setFoot] = useState(false);
    const bar = document.querySelector('#footerMainDiv');
    const info = document.querySelector('#info');

    const handleClick = () => {
        console.log('click')
        // info.innerHTML === 'More Info ^' ? info.innerHTML = 'Close X' : info.innerHTML = 'More Info ^';
        // info.innerHTML === 'Close X' ? bar.setAttribute('class', 'footerMainDivOpen') : bar.setAttribute('class', 'footerMainDiv');
        setFoot(!foot)
    }
    return (
        <>
        {!foot ?

            <div className="footerMainDiv" id='footerMainDiv'>
            <div className='footerDiv' >
            <p className='footerFont' >Developed</p>
            </div>
            <div className='footerDiv' >
            <p className='footerFont' >Technologies</p>
            </div>
            <div className='footerDiv' >
            <p className='footerFont' >Links</p>
            </div>
            <div className='footerDiv' id='moreInfoDiv' onClick={handleClick}>
            <p className='footerFont' id='info' >More Info ^</p>
            </div>
            </div>
        : <div className="footerMainDivOpen" id='footerMainDiv'>
        <div className='footerDiv' >
        <p className='footerFont' >Developed by Jonatan Aguilar</p>
        </div>
        <div className='footerDivTech'>
            <p className='footerFont'>Technologies</p>
            <div className='innerTechDiv'>
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>

        </div>
        <div className='footerDivTech' >
            <p className='footerFont' >Links</p>
            <div className='innerTechDiv'>

                <a target={'_blank'} href='https://github.com/nullgar'>
                    <img className='techLogo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
            </div>
        </div>
        <div className='footerDiv' id='moreInfoDiv' onClick={handleClick}>
        <p className='footerFont' id='info' >Close X</p>
        </div>
        </div>}
        </>
    )
}

export default Footer;
