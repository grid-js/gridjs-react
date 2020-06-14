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

and then:

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

## Example

See the [React example](https://gridjs.io/docs/integrations/react) on Grid.js website.

## License

MIT
