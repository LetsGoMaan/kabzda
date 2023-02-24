import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('accordion mode changed')


export const MenuCollapsedMode = () =>  <Accordion collapsed={false} setAccordionCollapsed={callback} titleValue={'Menu'}/>
export const UsersUncollapsedMode = () =>  <Accordion collapsed={true} setAccordionCollapsed={callback} titleValue={'Users'}/>
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion collapsed={value} setAccordionCollapsed={() => {setValue(!value)}} titleValue={'Users'}/>
}





