import React, { forwardRef } from 'react';

export default forwardRef((props, ref) => <input ref={ref} {...props} />);
