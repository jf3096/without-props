## without-props

Extraction from "babel-runtime/helpers/objectWithoutProperties".
The only purpose of this tools is to make npm installation quicker as well as stabilize version control for my internal use projects.
Eventually, enable the webpack bundling hit the same package version.

## example
```javascript
import withoutProps from 'without-props';
const obj = {aa: 123, bb: 456}
withoutProps(obj, ['aa']);
// {bb: 456}
```

## Author
She Ailun
