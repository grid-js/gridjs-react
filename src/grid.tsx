import * as React from "react";
import { Component, createRef, RefObject } from "react";
import { Grid as Gridjs, Config } from "gridjs";

class Grid extends Component<Partial<Config>, any> {
  private wrapper: RefObject<HTMLDivElement> = createRef();
  // Grid.js instance
  private readonly instance = null;

  constructor(props) {
    super(props);

    this.instance = new Gridjs(props || {});
  }

  getInstance(): Gridjs {
    return this.instance;
  }

  componentDidMount(): void {
    // prevent gridjs from complaining that the container is not empty
    if (this.wrapper.current.childNodes.length > 0) {
      this.wrapper.current.innerHTML = '';
    }

    this.instance.render(this.wrapper.current);
  }

  componentDidUpdate(): void {
    this.instance.updateConfig(this.props).forceRender();
  }

  render(): React.ReactElement {
    return <div ref={this.wrapper} />;
  }
}

export default Grid;
