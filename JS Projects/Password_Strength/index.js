/**
 * Validates password strength based on three specific criteria.
 * @param {string} password 
 * @returns {boolean}
 */
function isStrongPassword(password) {
    // 1. Check length (must be at least 8)
    if (password.length < 8) {
        return false;
    }

    // 2. Check if it contains the string "password"
    // .includes() is case-sensitive, which fits the example
    if (password.includes("password")) {
        return false;
    }

    // 3. Check for at least one uppercase character
    // We check if the password is different from its all-lowercase version
    // (If it's the same, it means there were no uppercase letters to change)
    if (password === password.toLowerCase()) {
        return false;
    }

    // If none of the 'false' conditions were met, it's a strong password!
    return true;
}

// Example calls for testing in the console:
console.log(isStrongPassword("Qwerty"));         // false (Too short)
console.log(isStrongPassword("passwordQwerty")); // false (Contains "password")
console.log(isStrongPassword("qwerty123"));      // false (No uppercase)
console.log(isStrongPassword("Qwerty123"));      // true