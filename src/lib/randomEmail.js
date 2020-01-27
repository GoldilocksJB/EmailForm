const RandomEmail = {
    min: 3,
    max: 0,
    setStringLength: (max) => {
        RandomEmail.max = max;
        return Math.random() * (RandomEmail.max - RandomEmail.min) + RandomEmail.min;
    },
    setString: (length) => {
        let string = '';
        for (let i = 0; i < length; i++) {
            var char = Math.random().toString(36).substring(11);
            string = string + char;
        }
        if (string.length > RandomEmail.max) {
            let diff = string.length - RandomEmail.max;
            return string.substring(diff);
        }
        return string;
    },
    generate: () => {
        let usernameLength = RandomEmail.setStringLength(12);
        let username = RandomEmail.setString(usernameLength);
        let subdomainLength = RandomEmail.setStringLength(4);
        let subdomain = RandomEmail.setString(subdomainLength);

        let newEmail = `${username}@${subdomain}.ru`
        return newEmail;
    }
}

export default RandomEmail;