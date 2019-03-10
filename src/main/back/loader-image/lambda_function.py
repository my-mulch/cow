import json
import numpy as np


def lambda_handler(event, context):
    print("WIll you be in the cloud logs, my friend?")
    
    return {
        'statusCode': 200,
        'body': np.random.randint(0, 10, (5, 5))
    }
