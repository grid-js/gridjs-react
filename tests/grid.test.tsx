import * as React from "react";
import {render, waitFor} from '@testing-library/react'
import { Grid } from "../index";
import { _, ReactWrapper } from "../src/wrapper";
import { h } from "gridjs";


describe("Grid component", () => {
  it("should render a table without header", async () => {
    const table = render(<Grid data={[[1, 2, 3]]} />);

    await waitFor(() => table.findByText('1'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });

  it("should render a table with headers", async () => {
    const table = render(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} />
    );

    await waitFor(() => table.findByText('1'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });

  //it("should receive the ready event", async () => {
  //  const table = render(
  //    <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} width={"500px"} />
  //  );

  //  const fn = jest.fn();
  //  instance(table).on('ready', fn);

  //  table.update();
  //  await flushPromises();

  //  expect(fn).toBeCalledTimes(1);
  //});

  it("should render a table with width", async () => {
    const table = render(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} width={"500px"} />
    );

    await waitFor(() => table.findByText('1'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });

  it("should render a table with search", async () => {
    const table = render(
      <Grid data={[[1, 2, 3]]} columns={["a", "b", "c"]} search={true} />
    );

    await waitFor(() => table.findByText('1'));
    expect(table.container.innerHTML).toMatchSnapshot();
  });

  it("should render a table with pagination and search", async () => {
    const table = render(
      <Grid
        data={[
          [10, 20, 30],
          [40, 50, 60],
          [70, 80, 90],
        ]}
        columns={["a", "b", "c"]}
        search={true}
        pagination={{
          enabled: true,
          limit: 1,
        }}
      />
    );

    await waitFor(() => table.findByText('30'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });

  it("should render a table with the ReactWrapper class", async () => {
    const table = render(
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
              element: <b>9</b>,
              parent: "span",
            }),
          ],
        ]}
        columns={["a", "b", "c"]}
      />
    );

    await waitFor(() => table.findByText('8'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });

  it("should render a table with the wrapper function", async () => {
    const table = render(
      <Grid
        data={[
          [1, 2, 3],
          [4, 5, 6],
          [_(<b>7</b>), _(<b>8</b>), _(<span>9</span>, "span")],
        ]}
        columns={["a", "b", "c"]}
      />
    );

    await waitFor(() => table.findByText('9'));

    expect(table.container.innerHTML).toMatchSnapshot();
  });
});
