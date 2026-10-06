// Production API Server v1.0.0
function getUserProfile(user) {
    // V1.0.0 implementation
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        password_hash: user.password_hash, // CRITICAL SECURITY LEAK!
        ssn: user.ssn                      // CRITICAL SECURITY LEAK!
    };
}

module.exports = { getUserProfile };
