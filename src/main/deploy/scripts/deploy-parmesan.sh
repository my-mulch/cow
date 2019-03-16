#!/bin/sh

pwd

pip install numpy
cp -r /var/lang/lib/python3.6/site-packages/numpy parmesan-lambdas/src/main/back/load-image

ls -la parmesan-lambdas/src/main/back/load-image

cd parmesan-lambdas/src/main/deploy
mv ~/.terraform .

terraform init

terraform plan \
-out=parmesan-deploy-plan \
-input=false \
-var="lambda_name=parmesan-load-image" \
-var="lambda_path=parmesan-lambdas/src/main/back/load-image" \

terraform apply \
-input=false \
parmesan-deploy-plan
