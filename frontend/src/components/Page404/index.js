import './Page404.css'
const Page404 = () => {
    return (
        <div className="errorDiv">
            <div className='errorContainer'>
                <h1 className='errorFont' >Nothing Found!</h1>
                <img className='ghost' src='https://www.svgrepo.com/show/190217/ghost.svg' alt='Spooky Ghost' />
                <p className='errorFont' >You seem lost please proceed to the home page!</p>
            </div>
        </div>
    )
}

export default Page404;
