import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('accordion mode changed')
const onClickCallBack = action('some item was clicked')


export const MenuCollapsedMode = () =>  <Accordion collapsed={false} setAccordionCollapsed={callback} titleValue={'Menu'} items={[]} onClick={onClickCallBack}/>
export const UsersUncollapsedMode = () =>  <Accordion collapsed={true} setAccordionCollapsed={callback} titleValue={'Users'} items={[{title: "Dimych", value: 1,}, {title: "Yolo" , value: 2}, {title: "Falono" , value: 3,}]} onClick={onClickCallBack}/>
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion collapsed={value} setAccordionCollapsed={() => {setValue(!value)}} titleValue={'Users'}
                    items={[{title: "Dimych", value: 1,}, {title: "Yolo" , value: 2}, {title: "Falono" , value: 3,}]} onClick={onClickCallBack}/>
}





