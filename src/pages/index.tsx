import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {

  return (
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <img className="logo" alt="logo" src={"https://user-images.githubusercontent.com/10556209/75176062-0f31f880-56f9-11ea-8250-33a50c83dfab.png"} style={{ paddingTop: "10%" }} />
        <Typography gutterBottom style={{ paddingTop: "100px", paddingBottom: "20px" }} variant="inherit">
        ETC Core is a leading Ethereum Classic core development team.
        </Typography>
        


        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/projects">
            Projects
            </Button>
        </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="https://medium.com/etc-core">
            Blog
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/about">
            About
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="https://github.com/etclabscore">
            Github
            </Button>
          </Grid>
        </Grid>

      <br/>
      <br/>

        
        <Grid container justify="space-between" style={{ marginBottom: "85px" }}>
          <Grid item container direction="column" style={{ width: "320px" }}>
              <Grid>
                <Box>
                  <Typography variant="h2" gutterBottom color="primary">Tooling</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                    We deliver infrastructure tooling, specifications, and resources to the Ethereum Classic ecosytem. We strongly beleive in high quality software, readability, and cross-chain compatability.
                  </Typography>
                </Box>
              </Grid>
          </Grid>

          <Grid item container direction="column" style={{ width: "320px" }}>
              <Grid>
                <Box>
                  <Typography variant="h2" gutterBottom color="primary">Protocol</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                    We maintain the Core-Geth client and actively participate in protocol research, upgrades, and events.
                  </Typography>
                </Box>
              </Grid>
          </Grid>

          <Grid item container direction="column" style={{ width: "320px" }}>
              <Grid>
                <Box>
                  <Typography variant="h2" gutterBottom color="primary">EVM</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                    We maintain the EVM-LLVM backend project and commited to maximizing EVM capabilities and innovating the smart contract development cycle.
                  </Typography>
                </Box>
              </Grid>
          </Grid>
        </Grid>

        <Grid>
            <Box>
              <Typography variant="h2">
                Partners
              </Typography>
              </Box>
              <br/>
              <Link href="https://etclabs.org">
              <img className="logo" alt="logo" src={"https://etclabs.org/wp-content/uploads/2020/04/Website-Logo379x79.png"} style={{ width: "320px", marginTop: "1rem" }} />
              </Link>
              <Box>
              <Typography variant="caption">
              The mission of ETC Labs is to build relevant, accessible, and high-quality technology, to create communities of value in a mature and regulated ecosystem. Our goal is to fulfill the promise of blockchain to improve people’s lives using the Ethereum Classic technology, one of the world’s major public blockchains.</Typography>
              </Box>
          </Grid>
      </Grid>
  );
};

export default MyApp;