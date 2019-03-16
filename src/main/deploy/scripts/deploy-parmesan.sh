#!/bin/sh

cd parmesan-lambdas/src/main/back/deploy

echo $(pwd)

# terraform plan \
# -out=parmesan-deploy-plan \
# -input=false

# terraform apply \
# -input=false \
# -var="lambda_name=load_image" \
# -var="lambda_path=../back/load-image" \
# parmesan-deploy-plan

