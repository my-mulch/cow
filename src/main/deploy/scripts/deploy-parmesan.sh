#!/bin/sh

mv ~/.terraform parmesan-lambdas/src/main/deploy
cd parmesan-lambdas/src/main/deploy

terraform plan \
-out=parmesan-deploy-plan \
-input=false

terraform apply \
-input=false \
-var="lambda_name=load_image" \
-var="lambda_path=../back/load-image" \
parmesan-deploy-plan
