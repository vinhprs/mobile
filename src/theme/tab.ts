import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
   tab:{
        fontWeight: 'semibold',
        color:"#61677A",
        _selected:{
            color:"#272829"
        },
   },
   tablist:{
    
   },
   tabpanels:{
    py:"30px"
   }
})
const colorfulVariant = definePartsStyle({
    root:{
        border:"1px solid #272829"
    },
    tab:{
     
        
    },
    tablist: {
        borderBottom: '1px solid #272829',
    },
  });
  
  const variants = {
    colorful: colorfulVariant,
  };
// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle,variants })