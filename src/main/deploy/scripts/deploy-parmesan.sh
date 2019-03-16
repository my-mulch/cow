#!/bin/sh

pip install numpy

cp -r /var/lang/lib/python3.6/site-packages/numpy parmesan-lambdas/src/main/back/load-image
mv ~/.terraform parmesan-lambdas/src/main/deploy

terraform init parmesan-lambdas/src/main/deploy

terraform plan \
-out=parmesan-deploy-plan \
-input=false \
-var="lambda_name=parmesan-load-image" \
-var="lambda_path=parmesan-lambdas/src/main/back/load-image" \

terraform apply \
-input=false \
parmesan-deploy-plan
