const upload = (req, res, next) => {
    try {
        console.log(req.file.path)
        console.log('uploading image...');
        next()
    } catch (error) {
        console.log('not uploading image...')
    }
}

module.exports = upload;