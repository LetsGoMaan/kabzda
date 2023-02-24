import React from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
};

export const MenuCollapsedMode = () =>  <UncontrolledAccordion titleValue={"Menu"}/>
export const UsersUncollapsedMode = () =>  <UncontrolledAccordion titleValue={"Users"}/>
// export const ModeChanging = () => {
//   const [value, setValue] = useState<boolean>(true)
//   return <UncontrolledAccordion titleValue={"Menu"} collapsed ={value} setCollapsed={setValue}/>
// }





