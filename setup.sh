#!/bin/sh

NODE_MODULES_DIR="node_modules"
PKG_JSON="package.json"

if [ ! -f "$PKG_JSON" ]; then
  yarn global add create-react-app;
  yarn create react-app my-app
fi

if [ ! -d "$NODE_MODULES_DIR" ]; then
  yarn install
fi

yarn start
