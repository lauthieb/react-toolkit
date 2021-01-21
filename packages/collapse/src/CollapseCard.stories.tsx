import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CollapseCard from './CollapseCard';
import readme from '../README.md';

const LABELS = {
  collapse: {
    title: 'CollpaseCard Title',
    text:
      'Collapsible content Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
    textb: 'bold text',
  },
};

const KNOBS_LABELS = {
  collapse: {
    title: 'Title',
    text: 'Text',
    textb: 'Text Bold',
  },
};

export default {
  title: 'Collapse',
  component: CollapseCard,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

type TemplateProps = Omit<ComponentProps<typeof CollapseCard>, 'children'>;
const Template: Story<TemplateProps> = ({ ...args }) => (
  <CollapseCard onToggle={action('onToggle')} {...args}>
    <CollapseCard.Header>
      {text(KNOBS_LABELS.collapse.title, LABELS.collapse.title)}
    </CollapseCard.Header>
    <CollapseCard.Body>
      {text(KNOBS_LABELS.collapse.text, LABELS.collapse.text)}
      <b>{text(KNOBS_LABELS.collapse.textb, LABELS.collapse.textb)}</b>
    </CollapseCard.Body>
  </CollapseCard>
);

export const CollapseCardStory = Template.bind({}) as typeof Template;
CollapseCardStory.storyName = 'Default';
