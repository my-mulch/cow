function repositoryListener(socket) {
    const repo = []
    let i = 0

    socket.on('data', function (data) {
        repo.push(data)
        if (++i % 5 == 0)
            console.log(repo)
    })
}


require('net')
    .createServer(repositoryListener)
    .listen(3000)
