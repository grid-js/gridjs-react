import * as React from "react";
import { mount } from "enzyme";
import { Grid } from "../index";
import { _, ReactWrapper } from "../src/wrapper";
import { h } from "gridjs";

const flushPromises = () => new Promise(setImmediate);

describe("Grid component", () => {
  it("should render a table without header", async () => {
    const table = mount<Grid>(<Grid data={[[1, 2, 3]]} />);
    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with headers", async () => {
    const table = mount<Grid>(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with width", async () => {
    const table = mount<Grid>(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} width={"500px"} />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with search", async () => {
    const table = mount<Grid>(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} search={true} />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with pagination and search", async () => {
    const table = mount<Grid>(
      <Grid
        data={[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]}
        columns={["a", "b", "c"]}
        search={true}
        pagination={{
          enabled: true,
          limit: 1,
        }}
      />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with the ReactWrapper class", async () => {
    const table = mount<Grid>(
      <Grid
        data={[
          [1, 2, 3],
          [4, 5, 6],
          [
            h(ReactWrapper, {
              element: <b>7</b>,
            }),
            h(ReactWrapper, {
              element: <b>8</b>,
            }),
            h(ReactWrapper, {
              element: <b>8</b>,
              parent: "span",
            }),
          ],
        ]}
        columns={["a", "b", "c"]}
      />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });

  it("should render a table with the wrapper function", async () => {
    const table = mount<Grid>(
      <Grid
        data={[
          [1, 2, 3],
          [4, 5, 6],
          [_(<b>7</b>), _(<b>8</b>), _(<span>9</span>, "span")],
        ]}
        columns={["a", "b", "c"]}
      />
    );

    await flushPromises();
    table.update();
    expect(table.html()).toMatchSnapshot();
  });
});
