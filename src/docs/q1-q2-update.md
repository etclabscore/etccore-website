---
title: ETC Core - Quarterly Development Review Q1, Q2, 2020
---

# ETC Core - Quarterly Development Review Q1, Q2, 2020

## The first half of the year achievements

In the first half of the year our team kicked ass, contributed to 2 hard-forks on Ethereum Classic along with new product releases (v1.0.0 and beyond), existing project improvements and an abundance of collaboration with other blockchain projects with much more to be announced this year.

### Protocol

- Agharta

    The Ethereum Classic protocol successfully completed the [Agharta](https://medium.com/etc-core/agharta-hard-fork-is-successfully-activated-on-ethereum-classic-10a9bb62624e) hard-fork on January 12, 2020 at block 9,573,000 which was inclusive of the Ethereum Constantinople features making the majority of apps and use-cases cross-compatible between the two cousin chains. 

- Phoenix

     The Ethereum Classic protocol successfully completed the [Phoenix](https://medium.com/etc-core/phoenix-hard-fork-successfully-activates-on-ethereum-classic-4f88ef1c50d6?source=collection_home---4------3-----------------------) hard-fork on May 31, 2020, at block 10,500,839 which was inclusive of the Ethereum Instanbul features bringing Ethereum Classic and Ethereum to absolute protocol parity.

    Our team contributed greatly to these hard-fork initiatives ensuring client readiness, monitoring, testing, coordinating with consumers and our fellow community.

    [Hard Fork Sets Stage for Ethereum Classic’s Second Major Departure From Ethereum](https://www.coindesk.com/hard-fork-sets-stage-for-ethereum-classics-second-major-departure-from-ethereum) 

- Core-geth [releases](https://github.com/etclabscore/core-geth/releases) v1.11.0 - 1.11.7

    The ETC Core team released and maintains the [Core-geth](https://core-geth.org/) client which is a fresh fork of the Ethereum Foundation's official Go-Ethereum implementation with better security considerations. Consumers can use Core-geth to run Ethereum Classic, Eth, and related testnets.

    Our protocol provider team directly maintains the Core-geth client which successfully handled the recent Ethereum Classic hard-forks without major issues. Core-geth v1.11.0 was the first client release that supported the Phoenix hard-fork.

### EVM

- EVM-LLVM Alpha
    
    The [EVM-LLVM Alpha](https://etclabscore.github.io/evm-llvm-website/) version was released in Q1. EVM-LLVM project is providing an LLVM back-end target for the EVM allowing developers to build new programming languages to target the EVM. This will allow developers to create new smart contract programming languages to target the EVM with all the security and performance benefits provided by LLVM.

### Tooling

- Expedition [releases](https://github.com/etclabscore/expedition/releases) v1.8.0 - 1.9.0
    
    [Expedition](https://expedition.dev/) is a minimal block explorer for Ethereum Stack and utilizes Jade Service Runner for managing background services (Core-Geth), OpenRPC for underlying functionality, and Pristine. It does not use a database, and can be configured to point at any remote RPC node for any EVM-based network. The goal of Jade Explorer is to provide a resource for network information and block exploration.

- Signatory [releases](https://github.com/etclabscore/signatory/releases) v1.0.0 - 1.0.8

    Our tooling team released, [Signatory](https://signatory.dev/), a transaction and message signing module for EVM-based platforms. Signatory can run offline, run as a standalone server, and easily integrate with Node.js projects. It's [API](https://signatory.dev/api-documentation) infrastructure is built using OpenRPC providing service discovery, documentation, and compatible with OpenRPC side-kick tools.

- Signatory Core [releases](https://github.com/etclabscore/signatory-core/releases) v1.0.0 - 1.0.1

    [Signatory Core](https://github.com/etclabscore/signatory-core) is a barebones version of Signatory.

- Eserialize [releases](https://github.com/etclabscore/eserialize/releases) v1.0.0 - 1.1.2
    
    This goal of this module is to provide easy functions to serialize and deserialize data for the Ethereum Stack.
  
- OpenRPC Specification [releases](https://github.com/open-rpc/spec/releases) v1.1.10 - 1.2.6
    
    The [OpenRPC Specification](https://spec.open-rpc.org/) defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.

- OpenRPC [Inspector](https://inspector.open-rpc.org/), [Playground](https://playground.open-rpc.org/), and other side-kick tooling improvements

    The OpenRPC project has an abundance of side-kick tooling that we've continued to improve upon.
  
- Ethereum JSON RPC Specification [releases](https://github.com/etclabscore/ethereum-json-rpc-specification/releases) v1.3.4 - 1.3.6

  This repository is the home of the Ethereum OpenRPC document that describes the JSON-RPC interface to be implemented by client developers. It contains the tooling and scripts to automate producing artifacts for consuming the JSON-RPC API (docs, clients, etc).  

- Jade [releases](https://github.com/etclabscore/jade-service-runner/releases) v1.8.0 - 1.9.0

  Jade service runner is an opinionated JSON-RPC service manager, that provides daemonization, installation, and discovery for JSON-RPC based services.

### Consumer Resources

- ETC Core Roadmap 2020 [announcement](https://medium.com/etc-core/etc-core-2020-roadmap-announcement-c2166cdbc53d)

- ETC Signal

    The [ETC Signal](http://signal.ethclassic.io/) newsletter was released prior to the Phoenix upgrade to deliver all-consumer messages to ETC consumers such as; hard-fork updates, security alerts, concensus developments, or anything that impacts anyone involved with ETC. The ETC Signal was used to broadcast important Phoenix messaging to consumers. Therefore, if you are are an Exchange, Wallet, Miner, or utilizing ETC in anykind of way, then we strongly advise you subscribe a sustainable contact or team email to the newsletter ensuring you get important messages regarding Ethereum Classic.

- EVM61 Podcast [episodes](https://www.youtube.com/watch?v=He2-NWuwr14&list=PLiW3acHwcR6LAa_WS5sFWf1S_GquYVeJb) 1 - 5

    The [EVM61 Podcast](https://www.youtube.com/watch?v=He2-NWuwr14&list=PLiW3acHwcR6LAa_WS5sFWf1S_GquYVeJb) was released to talk about ETC updates and interviews with indivudals in the space. Episodes can be found on the ETC Core YouTube channel.

- https://etccore.io/transparency

### New Documentations and Demos

- OpenRPC Webinar

  - [Introduction - OpenRPC Webinar](https://www.youtube.com/watch?v=VdtBY6PEeks)
  - [Basics - OpenRPC Webinar](https://www.youtube.com/watch?v=wXlJWoWxk7Q)
  - [Advanced - OpenRPC Webinar](https://www.youtube.com/watch?v=hxdazdSBY2c)

- Core-geth
  - [How to contribute to Mordor Ethereum Classic Testnet](https://core-geth.org/contribute-to-mordor)
  - [How to setup an Ethereum node on Raspberry Pi 4](https://core-geth.org/setup-on-raspberry-pi)
  - [How to setup an Ethereum node on Digital Ocean](https://core-geth.org/setup-on-digital-ocean)
  - [Migrating from parity to Core-geth](https://medium.com/etc-core/migrating-from-parity-to-core-geth-d39606ad00c2)

- EVM-LLVM
  - [Creating your own Smart Contract Languages Using LLVM](https://medium.com/etc-core/creating-your-own-smart-contract-languages-using-llvm-a83a9aa1e0c1)

- Swarm
  - [How to run a Swarm node](https://twitter.com/ethswarm/status/1280886902040735744?s=20)
  
### Hackathons & Events

- ETHDenver 2020
    - [The Future Is Readable: Uncommonly Sensible Perspectives on Protocol Design & Tooling – Isaac Ardis](https://youtu.be/Vf17TSZPlUg)
    - ETC Core won the [1st place Snaps bounty winner at ETHDenver](https://medium.com/metamask/metamask-monthly-february-2020-7e362fcb0320)
  
- [Gitcoin Funding the Future Hackathon](https://medium.com/ethereum-classic-labs/announcing-our-gitcoins-funding-the-future-hackathon-winners-3385fc9147d8?source=collection_home---4------5-----------------------)
- [New York Blockchain Week Hackathon](https://medium.com/ethereum-classic-labs/announcing-the-new-york-blockchain-week-hackathon-winners-6ca9b075aaff?source=collection_home---4------2-----------------------)

### ETC Labs/ Core in the media

- [Ethereum Classic (ETC) Is Programmable Gold with more accounts than LTC BTC ADA Dash ZCash and Tezos](https://thecurrencyanalytics.com/14323/ethereum-classic-etc-is-programmable-gold-with-more-accounts-than-ltc-btc-ada-dash-zcash-and-tezos/)
- [Ethereum Classic Successfully Completes Third Hard Fork Phoenix, Earlier Than Expected](https://bitcoinexchangeguide.com/ethereum-classic-successfully-completes-third-hard-fork-phoenix-earlier-than-expected/)
- [Ethereum Classic (ETC) is Looking for Stablecoin Projects to Support](https://en.ethereumworldnews.com/ethereum-classic-etc-is-looking-for-stablecoin-projects-to-support/)
- [Blockchain For Impact Accelerator ETC Labs Funds Female Founders](https://www.forbes.com/sites/nisaamoils/2020/06/02/blockchain-for-impact-accelerator-etc-labs-funds-female-founders/?utm_content=130869367&utm_medium=social&utm_source=twitter&hss_channel=tw-999916823964368896#47fd71b723fc)