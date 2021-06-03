/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import CheckBadge from '@zendeskgarden/svg-icons/src/12/check-badge-stroke.svg';
import Zendesk from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import CarIcon from '@zendeskgarden/svg-icons/src/16/car-stroke.svg';
import EmailIcon from '@zendeskgarden/svg-icons/src/16/email-stroke.svg';
import GearIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import HomeIcon from '@zendeskgarden/svg-icons/src/26/home-fill.svg';

import { Timeline } from '@zendeskgarden/react-accordions';

export default {
  title: 'Components/Accordions/Timeline',
  subcomponents: {
    Timeline,
    'Timeline.Content': Timeline.Content,
    'Timeline.OppositeContent': Timeline.OppositeContent
  }
} as Meta;

const items = [
  { id: '1', time: '09:30am', activity: 'Eat', day: 'Monday' },
  { id: '2', time: '01:30pm', activity: 'Code', day: 'Tuesday' },
  { id: '3', time: '05:30pm', activity: 'Sleep', day: 'Wednesday' },
  { id: '4', time: '09:00pm', activity: 'Repeat', day: 'Thursday' }
];

const items2 = [
  {
    icon: <EmailIcon />,
    time: 'Monday @ 1PM',
    activity: 'Eat',
    day: 'Monday',
    text: `Avocado basil pesto smoked tofu roasted brussel sprouts overflowing
          berries summer fruit salad pine nuts lemon tahini dressing seitan red
          pepper tofu walnut mushroom tart artichoke hearts jalapeño chocolate
          toasted hazelnuts. Comforting pumpkin spice latte tabasco pepper
          samosa fall farro platter cherry bomb crunchy seaweed golden cayenne
          pepper green tea blood orange smash edamame soy milk pomegranate
          scotch bonnet pepper cool spring mint main course.`
  },
  {
    icon: <CarIcon />,
    time: 'Tuesday @ 2PM',
    activity: 'Code',
    day: 'Tuesday',
    text: `Avocado basil pesto smoked tofu roasted brussel sprouts overflowing
          berries summer fruit salad pine nuts lemon tahini dressing seitan red
          pepper tofu walnut mushroom tart artichoke hearts jalapeño chocolate
          toasted hazelnuts. Comforting pumpkin spice latte tabasco pepper
          samosa fall farro platter cherry bomb crunchy seaweed golden cayenne
          pepper green tea blood orange smash edamame soy milk pomegranate
          scotch bonnet pepper cool spring mint main course.`
  },
  {
    icon: <GearIcon />,
    time: "Wednesday @ 3PM and some very long text to make sure things don't break for i18n because that is some very imporant stuff we need to care about",
    activity: 'Sleep',
    day: 'Wednesday',
    text: `Avocado basil pesto smoked tofu roasted brussel sprouts overflowing
          berries summer fruit salad pine nuts lemon tahini dressing seitan red
          pepper tofu walnut mushroom tart artichoke hearts jalapeño chocolate
          toasted hazelnuts. Comforting pumpkin spice latte tabasco pepper
          samosa fall farro platter cherry bomb crunchy seaweed golden cayenne
          pepper green tea blood orange smash edamame soy milk pomegranate
          scotch bonnet pepper cool spring mint main course.`
  }
];

interface IStoryProps {
  isAlternate: boolean;
}

export const Default: Story<IStoryProps> = ({ isAlternate }) => {
  return (
    <>
      <main style={{ display: 'flex' }}>
        <section style={{ background: 'aliceblue', width: '30%', height: '800px' }}>
          <Timeline>
            {items.map(item => (
              <Timeline.Item key={item.id} icon={<CheckBadge />} surfaceColor="aliceblue">
                <Timeline.Content>
                  <div>{item.day}</div>
                  <div>
                    Avocado basil pesto smoked tofu roasted brussel sprouts overflowing berries
                    summer
                  </div>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </section>
        <section style={{ background: 'blue', width: '70%', height: '800px' }}></section>
      </main>
      <Timeline>
        {items2.map((item, index) => (
          <Timeline.Item
            key={index}
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
                height="20"
                width="20"
              />
            }
          >
            <Timeline.Content>
              <h3 style={{ margin: 0, padding: '0 0 4px 0' }}>{item.time}</h3>
              <div>{item.text}</div>
              <br />
              <img src="https://via.placeholder.com/350x150" alt="placeholder" />
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
      <Timeline isAlternate>
        {items.map((item, index) => (
          <Timeline.Item key={index} icon={<Zendesk />}>
            <Timeline.Content>
              <h2 style={{ padding: 0, margin: 0 }}>{item.day}</h2>
              <div>
                Avocado basil pesto smoked tofu roasted brussel sprouts overflowing berries summer
              </div>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>

      <Timeline>
        {items.map(item => (
          <Timeline.Item key={item.id} icon={<CheckBadge />} surfaceColor="#FFF">
            <Timeline.Content>
              <div>{item.day}</div>
              <div>
                Avocado basil pesto smoked tofu roasted brussel sprouts overflowing berries summer
              </div>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>

      <Timeline isAlternate>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
      </Timeline>

      <Timeline>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.OppositeContent>1:00PM</Timeline.OppositeContent>
          <Timeline.Content>Eat</Timeline.Content>
        </Timeline.Item>
      </Timeline>

      <Timeline isAlternate>
        {items.map((item, index) => (
          <Timeline.Item key={index} icon={<Zendesk />}>
            <Timeline.Content>
              <h2 style={{ padding: 0, margin: 0 }}>{item.day}</h2>
              <div>
                Avocado basil pesto smoked tofu roasted brussel sprouts overflowing berries summer
              </div>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};

Default.argTypes = {
  numSteps: {
    name: 'isAlternate :)'
  }
};

Default.args = {
  isAlternate: false
};

Default.parameters = {
  docs: {
    description: {
      component: `
   Stepper implementations can use [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
   to communicate what step the user is on. For a horizontal \`Stepper\`
   render step content outside of the \`Stepper\` component instead of using
   \`Stepper.Content\`.
 `
    }
  }
};
