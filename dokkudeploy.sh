#!/bin/bash

echo "The branch is:"
echo "$1"

if [ "$1" == "refs/heads/release/v1" ]; then
  mkdir -p ~/.ssh
  cp .sshconfig ~/.ssh/config
  echo "$2" >> ~/.ssh/id_rsa.stocksizer
  git remote add dokku dokku@host.416.amsdfw.us:stocksizer
  git push dokku master
fi