import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);
const baseStyle = definePartsStyle({
// define the part you're going to style
  label: {
    // change the font family of the label
  },
  control: {
    color:'#8614BC'
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });