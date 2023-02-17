import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
};

const callback = action('on or off clicked')


export const OnOffMode = () =>  <UncontrolledOnOff />
// export const ModeChanging = () => {
//   const [value, setValue] = useState<boolean>(true)
//   return <UncontrolledOnOff on={value} onChange={setValue}/>
// }





