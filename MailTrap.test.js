const axios = require("axios");
const { MailTrap } =  require("./MailTrap");
jest.mock("axios");

test('should return success', async () => {
    axios.post.mockResolvedValue({ success: true })
    const mailTrap = new MailTrap('test');
    const sender = { name: "Mailtrap Test", email: "test@test.com" };
    const receipts = [{ name: "Receipt 1", email: "receipt1@mail.com"}];
    const subject = "Test subject";
    const html = "<p>Welcome</p>";
    const attachments = [
        {
          filename: "welcome.png",
          content_id: "welcome.png",
          disposition: "inline",
          content: "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
        },
    ];
    const text = "Text";
    const result = await mailTrap.send({
        sender, receipts, subject, html, text, attachments
    });
    expect(result.success).toBeTruthy();
});

// there can be more test cases...