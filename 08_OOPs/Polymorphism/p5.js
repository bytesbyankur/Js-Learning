class Notification {
    send() {
        console.log('Sending notification.');
    }
}

class EmailNotification extends Notification {
    send() {
        console.log('Sending email notification.');
    }
}

class SMSNotification extends Notification {
    send() {
        console.log('Sending SMS notification.');
    }
}

const messages = [new EmailNotification(), new SMSNotification()];
messages.forEach((message) => message.send());
