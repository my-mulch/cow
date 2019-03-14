import json
import numpy as np


def lambda_handler(event, context):
    print("WIll you be in the cloud logs, my friend?")

    return json.dumps({
        'statusCode': 200,
        'body': np.arange(25).reshape(5, 5)
    })
