import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import CollapseCard from './CollapseCard';
import readme from '../README.md';

const LABELS = {
  collapse1: {
    title: 'CollpaseCard #1 Title',
    text:
      'Collapsible #1 content Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
    textb: 'bold text',
  },
  collapse2: {
    title: 'CollpaseCard #2 Title',
    text:
      'Collapsible #2 content Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
    textb: 'bold text',
  },
  collapse3: {
    title: 'CollpaseCard #3 Title',
    text:
      'Collapsible #3 content Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
    textb: 'bold text',
  },
};

const KNOBS_LABELS = {
  collapse1: {
    title: 'CollpaseCard #1 Title',
    text: 'CollpaseCard #1 Text',
    textb: 'CollpaseCard #1 Text Bold',
  },
  collapse2: {
    title: 'CollpaseCard #2 Title',
    text: 'CollpaseCard #2 Text',
    textb: 'CollpaseCard #2 Text Bold',
  },
  collapse3: {
    title: 'CollpaseCard #3 Title',
    text: 'CollpaseCard #3 Text',
    textb: 'CollpaseCard #3 Text Bold',
  },
};

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

type TemplateProps = Omit<ComponentProps<typeof Accordion>, 'children'>;
const Template: Story<TemplateProps> = ({ ...args }) => (
  <Accordion {...args}>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>
        {text(KNOBS_LABELS.collapse1.title, LABELS.collapse1.title)}
      </CollapseCard.Header>
      <CollapseCard.Body>
        {text(KNOBS_LABELS.collapse1.text, LABELS.collapse1.text)}
        <b>{text(KNOBS_LABELS.collapse1.textb, LABELS.collapse1.textb)}</b>
      </CollapseCard.Body>
    </CollapseCard>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>
        {text(KNOBS_LABELS.collapse2.title, LABELS.collapse2.title)}
      </CollapseCard.Header>
      <CollapseCard.Body>
        {text(KNOBS_LABELS.collapse2.text, LABELS.collapse2.text)}
        <b>{text(KNOBS_LABELS.collapse2.textb, LABELS.collapse2.textb)}</b>
      </CollapseCard.Body>
    </CollapseCard>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>
        {text(KNOBS_LABELS.collapse3.title, LABELS.collapse3.title)}
      </CollapseCard.Header>
      <CollapseCard.Body>
        {text(KNOBS_LABELS.collapse3.text, LABELS.collapse3.text)}
        <b>{text(KNOBS_LABELS.collapse3.textb, LABELS.collapse3.textb)}</b>
      </CollapseCard.Body>
    </CollapseCard>
  </Accordion>
);

export const AccordionStory = Template.bind({}) as typeof Template;
AccordionStory.storyName = 'Default';
AccordionStory.args = {
  onlyOne: true,
  className: '',
  classModifier: '',
};
