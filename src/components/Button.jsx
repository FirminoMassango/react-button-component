import "../assets/button.css";

export function Button(props) {
  var icon;
  var isIconOnLeft;
  var computedClassName;
  computedClassName = props.variant + " " + props.size + " " + props.color;

  if (props.disableShadow) {
    computedClassName += " disableShadow";
  }

  if (props.disabled) {
    computedClassName += " disabled";

    if (computedClassName.includes("text")) {
      computedClassName = "text-disabled";
    }
  }

  if (props.startIcon) {
    computedClassName += " icon-button";
    icon = <span className="material-icons">{props.startIcon}</span>;
    isIconOnLeft = true;
  }

  if (props.endIcon) {
    computedClassName += " icon-button";
    icon = <span className="material-icons">{props.endIcon}</span>;
    isIconOnLeft = false;
  }

  return isIconOnLeft ? (
    <button className={computedClassName}>
      {icon}
      Default
    </button>
  ) : (
    <button className={computedClassName}>
      Default
      {icon}
    </button>
  );
}
