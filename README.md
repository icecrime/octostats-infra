octostats-infra
===============

Infrastructure setup for the octostats project

## Usage

    $> fig up

Yep, that's it.

## Notes

This is essentially based on [@nacyot](https://github.com/nacyot) amazing work
at setting up the Graphite ecosystem in [proper Dockerfiles](https://github.com/nacyot/docker-graphite/).

I had to modify a few things:
- carbon-cache: changing config/storage-schemas.conf
- grafana: use fixed downloaded release rather than latest repository tag
