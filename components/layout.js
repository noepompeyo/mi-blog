import { Grid, GridItem } from '@chakra-ui/react';
import { Footer } from './Footer';
import { SectionsLinks } from './SectionsLinks';

export const Layout = ({ children }) => {
  return (
    <>
      <Grid
        display="grid"
        justifyItems="center"
        w="100vw"
        h="100vh"
        borderTop="10px solid"
        borderColor="orange.300"
        templateAreas={`" header"
                  " main "
                  " footer "`}
        gridTemplateRows={'50px, 1fr, 50px'}
        gridTemplateColumns={'1fr'}
      >
        <GridItem area={'header'} placeContent="center">
          <SectionsLinks />
        </GridItem>

        <GridItem area={'main'} direction="column" alignItems="center">
          {children}
        </GridItem>

        <GridItem area={'footer'} placeContent="center">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
export default Layout;
