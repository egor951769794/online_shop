import './HeaderCenter.css';

type HeaderCenterProps = {
  text: string;
}

export default function HeaderCenter(props: HeaderCenterProps) {
  return (
    <>
      <div className='header-center-container'>{props.text}</div>
    </>
  );
}
