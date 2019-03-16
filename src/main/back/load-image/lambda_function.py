import numpy as np


def lambda_handler(event, context):
    print("Coup - bye Allie")

    return {
        'statusCode': 200,
        'body': np.arange(25).reshape(5, 5).tolist()
    }
