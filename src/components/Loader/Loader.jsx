import css from './Loader.module.css'
import { ThreeDots } from 'react-loader-spinner'

 function Loader () { return (<div className={css.center}>
    <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#00008B"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>);}
  
export default Loader