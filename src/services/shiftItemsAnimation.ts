import { LayoutAnimation } from 'react-native';

function shiftItemsAnimation(): void {
  LayoutAnimation.configureNext({
    duration: 350,
    update: {
      type: LayoutAnimation.Types.easeIn,
      springDamping: 0.7,
    },
  });
}

export default shiftItemsAnimation;
