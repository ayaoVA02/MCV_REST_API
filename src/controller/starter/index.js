
const startServer = async (req, res) => {
    res.status(200).json({
        message: "Server is running"
    })
}



// if want to export


module.exports = {
    startServer
}