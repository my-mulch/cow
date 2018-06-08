const PORT = 5000
const DOMAIN = 'localhost'
const CONNSTR = `http://${DOMAIN}:${PORT}/`
const SOCKET = io.connect(CONNSTR)
