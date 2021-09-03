import Loading from '../components/loading'

const widthLoading = (Component) =>{

  return ({isLoading, ...props})=>{
    return isLoading ? <Loading /> : <Component {...props}/>
  }
}

export default widthLoading