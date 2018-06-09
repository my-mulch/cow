
def compose(*matrices):
    composition = matrices[0]

    for matrix in matrices[1:]:
        composition = composition.dot(matrix)

    return composition
