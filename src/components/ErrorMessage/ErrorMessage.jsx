import css from './ErrorMessage.module.css'
function ErrorMessage (){
    return(
        <>
        <p className={css.text}>Yuo have a problem, reboot page</p>
        </>
    );
}
export default ErrorMessage;