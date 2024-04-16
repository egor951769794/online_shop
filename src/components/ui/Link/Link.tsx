import './Link.css';


type LinkProps = {
  handler?: React.MouseEventHandler<HTMLDivElement>;
  content: JSX.Element;
}

export default function Link(props: LinkProps) {

  return (
    <>
      <div className="link-container" onClick={props.handler}>{props.content}</div>
    </>
  );
}
