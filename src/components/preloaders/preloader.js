import usersLoaderSvg from '../../assets/loaders/userspageloader.svg'

const Preloader = ()=>{
    return(<div>
    <div>Loading...<img  src={usersLoaderSvg} alt="loading"/></div></div>
    )
}

export default Preloader