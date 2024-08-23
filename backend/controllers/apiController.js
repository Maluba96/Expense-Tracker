const getUserData = (req, res) => {
    const userId = req.params.id;
    // Fetch user data logic here
    res.json({ message: `Data for user ${userId}` });
};

const postData = (req, res) => {
    const data = req.body;
    // Save data logic here
    res.json({ message: 'Data saved successfully' });
};

module.exports = {
    getUserData,
    postData
};
