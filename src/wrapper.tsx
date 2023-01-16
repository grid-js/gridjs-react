import { h, createRef as gCreateRef, Component as gComponent } from "gridjs";
import ReactDOM from "react-dom";


export class ReactWrapper extends gComponent<{
  element: any;
  parent?: string;
}> {
  static defaultProps = {
    parent: "div",
  };

  ref = gCreateRef();

  componentDidMount(): void {
    ReactDOM.render(this.props.element, this.ref.current);
  }

  render() {
    return h(this.props.parent, { ref: this.ref });
  }
}

export function _(element: any, parent?: string) {
  return h(ReactWrapper, {
    element: element,
    parent: parent,
  });
}
