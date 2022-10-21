import './Banner.css'

function Banner(props) {
    return props.pathname === '/home' ? (
        <div className="bannerContainerHome">
            <p>Chez vous, partout et ailleurs</p>
        </div>
    ) : (
        <div className="bannerContainerAbout"></div>
    )
}

export default Banner;