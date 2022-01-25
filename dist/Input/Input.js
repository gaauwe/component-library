import { __rest, __assign } from './../ext/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import { StyledLabel, StyledText, StyledInput, StyledMessage } from './Input.style.js';

var Input = function (_a) {
    var id = _a.id, disabled = _a.disabled, label = _a.label, message = _a.message, error = _a.error, success = _a.success, onChange = _a.onChange, placeholder = _a.placeholder, props = __rest(_a, ["id", "disabled", "label", "message", "error", "success", "onChange", "placeholder"]);
    return (React.createElement(Fragment, null,
        React.createElement(StyledLabel, null,
            React.createElement(StyledText, { disabled: disabled, error: error }, label)),
        React.createElement(StyledInput, __assign({ id: id, type: "text", onChange: onChange, disabled: disabled, error: error, success: success, placeholder: placeholder }, props)),
        React.createElement(StyledMessage, null,
            React.createElement(StyledText, { error: error }, message))));
};

export { Input as default };
//# sourceMappingURL=Input.js.map
