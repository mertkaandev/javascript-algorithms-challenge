// Get Token From Header in Node.js

// A token is sent from the client to the server in the form of a "Bearer" scheme in headers.
// Check that the token included or not included.
// Get the token from headers and assign it to a variable. Return the token.

const isTokenIncluded = (req) => {

    return (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
    );

};

const getAccessTokenFromHeader = (req) => {

    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];
    return access_token;

};
