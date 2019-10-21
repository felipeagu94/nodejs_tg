exports.success = (msg, res, status) => res.status(status || 200).send({ "data": msg })
exports.error = (res, msg, status) => {
    console.log('details error: ',msg)
    res.status(status || 500).send({ "error": 'something was wrong.' })
}
exports.standard = (res) => res.send({ "status" : 'server is working...' }) 