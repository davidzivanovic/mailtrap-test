const axios = require("axios");

class MailTrap {
    constructor(token) {
        this.axiosInstance = axios.create({
            baseURL: 'https://send.api.mailtrap.io/',
            headers: {
                Authorization: `Bearer ${token}`,
                Connection: "keep-alive"
            },
            timeout: 10000,
        });
    }

    async send(sender, recipients, subject, html, text, attachments) {
        try {
            const axiosResponse = await this.axiosInstance.post(
                "/api/send",
                {
                    from: sender,
                    to: recipients,
                    attachments,
                    subject,
                    html,
                    text
                }
            );
            return axiosResponse.data;
        } catch (err) {
            throw new Error(err.message || "Something went wrong while sending email.");
        }
    }
}

module.exports= {
    MailTrap
};