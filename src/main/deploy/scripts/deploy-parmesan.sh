#!/bin/sh

mv ~/.terraform parmesan-lambdas/src/main/deploy
cd parmesan-lambdas/src/main/deploy

terraform init

terraform plan \
-out=parmesan-deploy-plan \
-input=false \
-var="lambda_name=load_image" \
-var="lambda_path=../back/load-image" \

terraform apply \
-input=false \
parmesan-deploy-plan
