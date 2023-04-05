import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'md',
        color: props.colorMode === 'dark' ? '#fafafa' : '#171923',
        lineHeight: 'tall',
      },
    }),
  },
});

export default theme;
