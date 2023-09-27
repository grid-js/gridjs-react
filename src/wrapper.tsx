import { h, createRef as gCreateRef, Component as gComponent } from "gridjs";
import { createRoot } from "react-dom/client";


export class ReactWrapper extends gComponent<{
  element: any;
  parent?: string;
}> {
  static defaultProps = {
    parent: "div",
  };

  ref = gCreateRef();

  componentDidMount(): void {
    const root = createRoot(this.ref.current);
    root.render(this.props.element);
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
