#!/usr/bin/env bash

read -p "Version Number: " version

docker build --tag bwu1324/personal-profile-site:${version} .

read -p "Continue to publish? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

docker push bwu1324/personal-profile-site:${version}

read -p "Is this also the latest version? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

docker build --tag bwu1324/personal-profile-site:latest .
docker push bwu1324/personal-profile-site:latest
