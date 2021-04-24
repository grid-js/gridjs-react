import * as React from "react";
import { Component, createRef, RefObject } from "react";
import { Grid as Gridjs, UserConfig } from "gridjs";

class Grid extends Component<Partial<UserConfig>, any> {
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

  componentDidMount() {
    this.instance.render(this.wrapper.current);
  }

  componentDidUpdate() {
    console.log('XXXX')
    this.instance.updateConfig(this.props).forceRender();
  }

  render() {
    return <div ref={this.wrapper} />;
  }
}

export default Grid;
