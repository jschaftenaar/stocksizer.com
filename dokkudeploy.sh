#!/bin/bash

ls -la

echo "The branch is:"
echo "$1"

if [ "$1" == "refs/heads/release/v1" ]; then
  mkdir -p ~/.ssh
  cp .sshconfig ~/.ssh/config
  echo "$ID_RSA" >> ~/.ssh/id_rsa
  echo "$ID_RSA_PUB" >> ~/.ssh/id_rsa.pub
  git remote add dokku dokku@host.416.amsdfw.us:stocksizer 
  git push dokku release/v1:master
fi