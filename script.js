function makeid(l) {
    // Define the characters to choose from
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    // Generate a random string of length l
    for (let i = 0; i < l; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    
    return result;
}

// Example usage:
console.log(makeid(5)); // e.g., "K3f2G"
console.log(makeid(10)); // e.g., "aB9EfgT2X1"
