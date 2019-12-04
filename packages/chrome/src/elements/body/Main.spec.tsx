/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Main } from './Main';

describe('Main', () => {
  it('renders default styling', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveClass('c-chrome__body__content__main');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Main ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});