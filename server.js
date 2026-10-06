// Production API Server v1.0.1 - SECURITY PATCH
function getUserProfile(user) {
    // SECURITY PATCH: Loai bo thong tin nhay cam (password_hash va ssn)
    return {
        id: user.id,
        username: user.username,
        email: user.email
    };
}

module.exports = { getUserProfile };
