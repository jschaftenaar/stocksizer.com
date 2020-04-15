#!/bin/bash

ls -la

echo "The branch is:"
echo "$1"

if [ "$1" == "refs/heads/release/v1" ]; then
  mkdir -p ~/.ssh
  #cp .sshconfig ~/.ssh/config
  echo "$2" >> ~/.ssh/id_rsa.pub
  git clone --single-branch --branch release/v1 git@github.com:jschaftenaar/stocksizer.com.git
  cd stocksizer
  git remote add dokku dokku@host.416.amsdfw.us:stocksizer 
  git push dokku master
fi