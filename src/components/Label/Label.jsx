import "./label.style.css";

export function Label(props) {
  return (
    <label className="label" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
}
