import { __rest, __assign } from './../ext/tslib/tslib.es6.js';
import React from 'react';
import { StyledButton } from './Button.style.js';

var Button = function (_a) {
    var size = _a.size, primary = _a.primary, disabled = _a.disabled, text = _a.text, onClick = _a.onClick, props = __rest(_a, ["size", "primary", "disabled", "text", "onClick"]);
    return (React.createElement(StyledButton, __assign({ type: "button", onClick: onClick, primary: primary, disabled: disabled, size: size }, props), text));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
