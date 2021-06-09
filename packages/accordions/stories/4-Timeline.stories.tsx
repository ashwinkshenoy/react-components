/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { MD, LG } from '@zendeskgarden/react-typography';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Tag } from '@zendeskgarden/react-tags';
import EyeIcon from '@zendeskgarden/svg-icons/src/12/eye-stroke.svg';
import EmailIcon from '@zendeskgarden/svg-icons/src/12/email-stroke.svg';
import CartIcon from '@zendeskgarden/svg-icons/src/12/shopping-cart-stroke.svg';
import ClipboardIcon from '@zendeskgarden/svg-icons/src/12/clipboard-blank-stroke.svg';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';

const items = [
  {
    id: '727',
    icon: <EmailIcon />,
    time: 'Today 9:00 AM',
    activity: 'Salad onion',
    description: 'Salad onion dark chocolate ultimate lemonade zest cherry bomb pepper.'
  },
  {
    id: '921',
    icon: <ClipboardIcon />,
    time: 'Feb 08, 9:05 AM',
    activity: 'Cinnamon peanut',
    description: 'Cinnamon peanut butter chia seeds spiced powder crunchy.'
  },
  {
    id: '433',
    icon: <CartIcon />,
    time: 'Jan 21, 9:13 AM',
    activity: 'Kale cherries',
    description: 'Kale cherries lemon red lentil soup black bean chili dip spring.'
  },
  {
    id: '638',
    icon: <EyeIcon />,
    time: 'Jan 21, 9:21 AM',
    activity: 'Pumpkin noodles',
    description: 'Pumpkin noodles comforting spice latte peppermint tempeh simmer lemon.'
  }
];

interface IStoryProps {
  isAlternate: boolean;
  customIcons: boolean;
  showOppositeContent: boolean;
}

export default {
  title: 'Components/Accordions/Timeline',
  subcomponents: {
    Timeline,
    'Timeline.Item': Timeline.Item,
    'Timeline.Content': Timeline.Content,
    'Timeline.OppositeContent': Timeline.OppositeContent
  }
} as Meta;

const StyledTime = styled(MD)`
  color: ${props => props.theme.palette.grey[800]};
`;

const StyledActivity = styled(MD)`
  color: ${props => props.theme.palette.grey[600]};
`;

const StyledTimeline = styled(Timeline)`
  &:hover {
    cursor: pointer;
  }

  .alternate-content {
    &:hover {
      background: ${DEFAULT_THEME.palette.blue[100]};
    }
  }
`;

const StyledTooltip = styled(Tooltip)`
  box-shadow: ${props =>
    props.theme.shadows.lg(
      `${props.theme.space.base * 1.5}px`,
      `${props.theme.space.base * 2.5}px`,
      getColor('chromeHue', 600, props.theme, 0.15)!
    )};
`;

const StyledDefaultTimelineItem = styled(Timeline.Item)`
  &:hover {
    background: #fff;
  }

  svg {
    background: #fff !important;
  }
`;

const TooltipContent = ({ id, activity, description }: any) => (
  <>
    <Tag hue="yellow" style={{ marginBottom: '3px' }}>
      <span>New</span>
    </Tag>
    <MD tag="span" style={{ margin: '0px 8px' }}>
      Event #{id}
    </MD>
    <LG isBold>{activity}</LG>
    {description}
  </>
);

const Content = React.forwardRef<any, any>((props, ref) => {
  return <Timeline.Content {...props} ref={ref} />;
});

export const Default: Story<IStoryProps> = ({ isAlternate, customIcons, showOppositeContent }) => {
  return (
    <main style={{ minWidth: '1000px', maxWidth: '1284px', margin: '0 auto' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '70%', height: '485px' }}>
          <h1>Other page content</h1>
        </div>
        <div style={{ width: '30%', height: '485px' }}>
          <Timeline isAlternate={isAlternate}>
            {items.map((item, index) => (
              <StyledDefaultTimelineItem key={index} icon={customIcons ? item.icon : null}>
                <Timeline.Content>
                  <StyledTime isBold>{item.activity}</StyledTime>
                  <MD tag="span" style={{ color: DEFAULT_THEME.palette.grey[600] }}>
                    {item.time},
                  </MD>
                  &nbsp;
                  <Anchor href="https://zendesk.com/demo" style={{ fontSize: '14px' }}>
                    Event #{item.id}
                  </Anchor>
                  <StyledActivity>{item.description}</StyledActivity>
                </Timeline.Content>
              </StyledDefaultTimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%', height: '320px' }}>
          <h1>Other page content</h1>
        </div>
        <div style={{ width: '20%', height: '320px' }}>
          <StyledTimeline isAlternate={isAlternate}>
            {items.map((item, index) => (
              <StyledTooltip
                key={index}
                zIndex={1}
                delayMS={0}
                type="light"
                hasArrow={false}
                placement="start"
                content={
                  <TooltipContent
                    activity={item.activity}
                    description={item.description}
                    id={item.id}
                  />
                }
              >
                <Timeline.Item icon={customIcons ? item.icon : null}>
                  {showOppositeContent ? (
                    <Timeline.OppositeContent>
                      <StyledTime isBold>{item.time}</StyledTime>
                    </Timeline.OppositeContent>
                  ) : null}
                  <Content
                    as="a"
                    href="https://www.zendesk.com/demo/"
                    style={{ textDecoration: 'none' }}
                  >
                    {showOppositeContent ? null : <StyledTime isBold>{item.activity}</StyledTime>}
                    <StyledActivity>{item.time}</StyledActivity>
                  </Content>
                </Timeline.Item>
              </StyledTooltip>
            ))}
          </StyledTimeline>
        </div>
      </div>
      <hr />
      <StyledTimeline isAlternate style={{ width: '380px', margin: '0 auto' }}>
        {items.map((item, index) => (
          <StyledDefaultTimelineItem icon={customIcons ? item.icon : null}>
            {showOppositeContent ? (
              <Timeline.OppositeContent>
                <StyledTime isBold>{item.time}</StyledTime>
              </Timeline.OppositeContent>
            ) : null}
            <StyledTooltip
              key={index}
              zIndex={1}
              delayMS={0}
              type="light"
              hasArrow={false}
              placement={index % 2 === 0 ? 'end' : 'start'}
              content={
                <TooltipContent
                  activity={item.activity}
                  description={item.description}
                  id={item.id}
                />
              }
            >
              <Content
                as="a"
                href="https://www.zendesk.com/demo/"
                style={{ textDecoration: 'none' }}
                className="alternate-content"
              >
                <div>
                  {showOppositeContent ? null : <StyledTime isBold>{item.activity}</StyledTime>}
                  <StyledActivity>{item.time}</StyledActivity>
                </div>
              </Content>
            </StyledTooltip>
          </StyledDefaultTimelineItem>
        ))}
      </StyledTimeline>
      <hr />
      <StyledTimeline style={{ width: '364px', margin: '0 auto' }}>
        {items.map((item, index) => (
          <StyledDefaultTimelineItem key={index} icon={customIcons ? item.icon : null}>
            <Timeline.OppositeContent>
              <StyledTime isBold>{item.time}</StyledTime>
            </Timeline.OppositeContent>
            <StyledTooltip
              key={index}
              zIndex={1}
              delayMS={0}
              type="light"
              hasArrow={false}
              placement="end"
              content={
                <TooltipContent
                  activity={item.activity}
                  description={item.description}
                  id={item.id}
                />
              }
            >
              <Content
                as="a"
                href="https://www.zendesk.com/demo/"
                style={{ textDecoration: 'none' }}
                className="alternate-content"
              >
                <StyledActivity>{item.activity}</StyledActivity>
              </Content>
            </StyledTooltip>
          </StyledDefaultTimelineItem>
        ))}
      </StyledTimeline>
    </main>
  );
};

Default.args = {
  isAlternate: false,
  customIcons: false,
  showOppositeContent: false
};

Default.argTypes = {
  customIcons: {
    name: 'Show custom icons'
  },
  showOppositeContent: {
    name: 'Show opposite content'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: 'The Timeline component displays a list of events in chronological order.'
    }
  }
};
