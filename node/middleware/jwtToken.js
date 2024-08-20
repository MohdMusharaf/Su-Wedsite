const jwt = require('jsonwebtoken');

const jwtAuth = async (req, res, next) => { // Added 'next' as a parameter
    try {
        let jwtToken;
        const authHeader = req.headers["authorization"];
       

        if (authHeader !== undefined) {
            jwtToken = authHeader.split(" ")[1];
        }
        
        if (jwtToken === undefined) {
            return res.status(401).json({ message: 'No token provided.' });
        } else {
            jwt.verify(jwtToken, "JOBS_KEY", (error, payload) => {
                if (error) {
                    return res.status(401).json({ message: "Invalid JWT Token" });
                } else {
                    req.userId = payload.userId;
                    next(); // Call next() to proceed to the next middleware or route handler
                }
            });
        }
    } catch (e) {
        console.log('middleware error:', e);
        res.status(401).json({ message: "Authentication failed" });
    }
};

module.exports = jwtAuth;
