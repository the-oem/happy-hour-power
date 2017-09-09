#!/bin/bash

set -o errexit # Exit on error

cd react-ui/
npm install
# npm run build
npm run test:once
