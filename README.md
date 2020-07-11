# Grid.js for React

React component for [Grid.js](https://gridjs.io/)

## Install

```bash
npm install --save gridjs-react
```

Also, make sure you have Grid.js installed already as it's a peer dependency of `gridjs-react`:

```bash
npm install --save gridjs
```

## Usage

Import the Grid component first:

```js
import { Grid } from "gridjs-react";
```

```jsx
<Grid
  data={[
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
  ]}
  columns={['Name', 'Email']}
  search={true}
  pagination={{
    enabled: true,
    limit: 1,
  }}
/>
```

Then you can pass all Grid.js configs to the `Grid` component. See [Grid.js Config](https://gridjs.io/docs/config) for more details.

## React component in cells

You can bind your React components or elements in Table cells (both in header and body cells). 
Simply import the `_` function and use it in `data`, `columns` or `formatter` function:

```js
import { Grid, _ } from "gridjs-react";
```

```jsx
<Grid
  data={[
    [
      _(<b>John</b>),
      'john@example.com',
    ],
    [
      _(<MyReactComponent>Mike</MyReactComponent>),
      'mike@gmail.com',
    ]
  ]}
  columns={[
    'Name', 
    {
      name: 'Email',
      formatter: (cell) => _(<i>{cell}</i>)
    }
  ]}
  search={true}
  pagination={{
    enabled: true,
    limit: 1,
  }}
/>
```

## Example

See the [React example](https://gridjs.io/docs/integrations/react) on Grid.js website.

## License

MIT
