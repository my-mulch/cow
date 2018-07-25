import net from 'net'
import repo from './repository.mjs'

net.createServer(repo.acceptClient)
    .listen(3000)