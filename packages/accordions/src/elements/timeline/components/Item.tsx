/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useMemo,
  forwardRef,
  Children,
  ReactNode,
  ReactElement,
  HTMLAttributes
} from 'react';
import { Timeline } from '../Timeline';
import { StyledTimelineItem } from '../../../styled';
import { TimelineItemContext, useTimelineContext } from 'packages/accordions/src/utils';

interface IItem extends HTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
  surfaceColor?: string;
}

export const Item = forwardRef<HTMLLIElement, IItem>(({ icon, surfaceColor, ...props }, ref) => {
  const value = useMemo(() => ({ icon, surfaceColor }), [icon, surfaceColor]);
  const { isAlternate } = useTimelineContext();
  let hasOppositeContent = false;

  Children.forEach(props.children, child => {
    if ((child as ReactElement).type === Timeline.OppositeContent) {
      hasOppositeContent = true;
    }
  });

  return (
    <TimelineItemContext.Provider value={value}>
      <StyledTimelineItem
        ref={ref}
        isAlternate={isAlternate}
        hasOppositeContent={hasOppositeContent}
        {...props}
      />
    </TimelineItemContext.Provider>
  );
});

Item.displayName = 'Item';
