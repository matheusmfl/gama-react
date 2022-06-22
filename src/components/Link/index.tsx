interface linkProps {
    texto: string;
    redirect: string;
}

export default function links (props:linkProps) {
    return(
        <a href={props.redirect} target="_blank" rel="noreferrer">{props.texto}</a>
    )
}