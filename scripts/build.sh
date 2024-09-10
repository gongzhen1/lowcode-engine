#!/usr/bin/env bash

set -e

lerna run build \
  --scope @lce/lowcode-types \
  --scope @lce/lowcode-utils \
  --scope @lce/lowcode-shell \
  --scope @lce/lowcode-editor-core \
  --scope @lce/lowcode-editor-skeleton \
  --scope @lce/lowcode-designer \
  --scope @lce/lowcode-plugin-designer \
  --scope @lce/lowcode-plugin-command \
  --scope @lce/lowcode-plugin-outline-pane \
  --scope @lce/lowcode-react-renderer \
  --scope @lce/lowcode-react-simulator-renderer \
  --scope @lce/lowcode-renderer-core \
  --scope @lce/lowcode-workspace \
  --scope @lce/lowcode-engine \
  --stream

lerna run build:umd \
  --scope @lce/lowcode-engine \
  --scope @lce/lowcode-react-simulator-renderer \
  --scope @lce/lowcode-react-renderer \
  --stream

cp ./packages/react-simulator-renderer/dist/js/* ./packages/engine/dist/js/
cp ./packages/react-simulator-renderer/dist/css/* ./packages/engine/dist/css/
