#!/usr/bin/env bash

set -e

lerna run build \
  --scope @felce/lowcode-types \
  --scope @felce/lowcode-utils \
  --scope @felce/lowcode-shell \
  --scope @felce/lowcode-editor-core \
  --scope @felce/lowcode-editor-skeleton \
  --scope @felce/lowcode-designer \
  --scope @felce/lowcode-plugin-designer \
  --scope @felce/lowcode-plugin-command \
  --scope @felce/lowcode-plugin-outline-pane \
  --scope @felce/lowcode-react-renderer \
  --scope @felce/lowcode-react-simulator-renderer \
  --scope @felce/lowcode-vue-renderer \
  --scope @felce/lowcode-vue-simulator-renderer \
  --scope @felce/lowcode-renderer-core \
  --scope @felce/lowcode-workspace \
  --scope @felce/lowcode-engine \
  --stream

lerna run build:umd \
  --scope @felce/lowcode-engine \
  --scope @felce/lowcode-react-simulator-renderer \
  --scope @felce/lowcode-react-renderer \
  --scope @felce/lowcode-vue-simulator-renderer \
  --scope @felce/lowcode-vue-renderer \
  --stream

cp ./packages/react-simulator-renderer/dist/js/* ./packages/engine/dist/js/
cp ./packages/react-simulator-renderer/dist/css/* ./packages/engine/dist/css/
cp ./packages/vue-simulator-renderer/dist/js/* ./packages/engine/dist/js/
cp ./packages/vue-simulator-renderer/dist/css/* ./packages/engine/dist/css/
