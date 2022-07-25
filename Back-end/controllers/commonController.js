

//Test Controller to check service

exports.health = (req, res) => {
    res.status(200).json({ message:"Service running succesfully"});
};