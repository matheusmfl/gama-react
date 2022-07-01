import '../Box/style.css'

interface propsBox{
    background: string;
    children: JSX.Element;

}
export default function Box(props:propsBox){
    return(<section className={`box ${props.background}`}> {props.children} {props.children} </section>)
}