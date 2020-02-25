import React from "react";
import { Grid, Typography, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {

  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={3}
    >

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Expedition block explorer"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/75212470-a3797b00-574c-11ea-8734-d83e040cbe0d.gif"
                    title="Expedition block explorer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Expedition
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Expedition is a minimum open-source explorer for any EVM-based network.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://expedition.dev">
                    Visit
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/expedition">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="OpenRPC"
                    height="140"
                    image="https://pbs.twimg.com/profile_banners/1151382285142261761/1579753859/600x200"
                    title="OpenRPC"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    OpenRPC
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    The OpenRPC Specification defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://open-rpc.org/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://github.com/open-rpc/">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Signatory"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/73570773-a07fb900-4432-11ea-8ed1-3bf525af04d9.png"
                    title="Signatory"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Signatory
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    An offline transaction and message signer for the Ethereum Stack
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://signatory.dev/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/signatory/">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Core-geth"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/75211369-4af4ae80-5749-11ea-9997-be6e685f6a0b.png"
                    title="Core-geth"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Core-geth
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    A swiss army knife Ethereum Client
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://core-geth.org/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/core-geth/">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Core-geth"
                    height="140"
                    image="https://user-images.githubusercontent.com/450283/63640209-85cb3c00-c66b-11e9-9610-0c339ae66ac7.png"
                    title="Core-geth"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        EVM-LLVM
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    EVM-LLVM backend target bringing LLVM infrastructure to the EthereumStack
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://llvm.etccore.io/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://etclabscore/evm-llvm/">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Eserialize"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/75211991-35808400-574b-11ea-93fe-060c4e2f8f47.png"
                    title="Eserialize"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Eserialize
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    This goal of this module is to provide easy functions to serialize and deserialize data for the Ethereum Stack.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://eserialize.com/">
                    View
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/eserialize">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="ETC Status"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/75212139-9b6d0b80-574b-11ea-959b-1875f72d13c9.png"
                    title="ETC Status"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ETC Status
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    A network supervisor
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://etcstatus.live/">
                    View
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/classic-geth-supervisor.sh">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="ETH JSON-RPC API"
                    height="140"
                    image="https://user-images.githubusercontent.com/364566/71375336-ba47f980-2572-11ea-9cd5-38c5149c485a.gif"
                    title="ETH JSON-RPC API"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Ethereum JSON-RPC Specification
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    A standardized JSON-RPC Spec for the EVM built with OpenRPC
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:title%5D=Ethereum%20JSON-RPC%20API/">
                    View
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/classic-geth-supervisor.sh">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Jade"
                    height="140"
                    image="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png"
                    title="Jade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Jade
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Jade Service Runner is an opinionated JSON-RPC service manager, that provides daemonization, installation, and discovery for JSON-RPC based services.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://jade.builders/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/jade-service-runner">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Jade Desktop"
                    height="140"
                    image="https://user-images.githubusercontent.com/364566/63100364-cc15f200-bf2b-11e9-9698-12e05a8d0bd0.gif"
                    title="Jade Desktop"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Jade Desktop
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        An app that bundles Jade Service Runner and its interface into an easy to use application for users to install, manage, and discover locally run services.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="https://jade.builders/">
                    Docs
                </Button>
                <Button size="small" color="primary" href="https://github.com/etclabscore/jade-desktop">
                    Github
                </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card elevation={3} style={{width:"320px"}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Kotti Faucet"
                    height="140"
                    image="https://user-images.githubusercontent.com/10556209/75212793-9e68fb80-574d-11ea-9b43-21fed130f1dd.png"
                    title="Kotti Faucet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Kotti Faucet
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        We've also provided a Kotti faucet so the developer community can obtain testnet EthClassic.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" href="http://kottifaucet.me/">
                    Get Kotti Ether
                </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  );
};

export default MyApp;