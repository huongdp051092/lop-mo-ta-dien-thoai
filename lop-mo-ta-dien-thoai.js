let Mobile = function (name, battery) {
    // Pin
    this.battery = battery;
    // Luu tin nhan dang soan thao.
    this.draftMessages = [];
    // Luu tin nhan trong hop thu den.
    this.inboxMessages = [];
    // Luu tin nhan da gui.
    this.sentMessages = [];
    // Trang thai dien thoai.
    this.status = true;
    this.name = name;
    // Chuc nang bat tat dien thoai.
    this.setStatus = function (status) {
        if (this.reduceBattery()) {
            this.status = status;
        }
    };
    // Kiem tra trang thai dien thoai.
    this.getStatus = function () {
        if (this.reduceBattery()) {
            return this.status;
        }
    };
    // Sac pin dien thoai.
    this.chargeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    };
    // Soan tin nhan.
    this.createMessage = function (message) {
        if (this.reduceBattery()) {
            this.draftMessages.push(message);
            return message;
        }
    };
    // Nhan tin nhan tu mobile khac.
    this.receiveMessage = function (message) {
        if (this.reduceBattery()) {
            this.inboxMessages.push(message);
        }
    };
    // Gui tin nhan den mobile khac.
    this.sendMessage = function (message) {
        if (this.reduceBattery()) {
            this.sentMessages.push(message);
        }
    };
    // Xem tin trong hop thu den.
    this.viewInbox = function () {
        if (this.reduceBattery()) {
            return this.inboxMessages;
        }
    };
    // Xem tin da gui.
    this.viewSent = function () {
        if (this.reduceBattery()) {
            return this.sentMessages;
        }
    };
    // Giam pin
    this.reduceBattery = function () {
        if (this.battery > 0) {
            this.battery--;
        } else {
            this.status = false;
            console.log(this.name + " het pin roi, chay cai gi nua?");
        }
        return this.status;
    };
};

// Thuc hien kich ban
function demo() {
    // Tao iphone va nokia
    let iPhone = new Mobile("iPhone", 10);
    let nokia = new Mobile("Nokia", 5);
    // Soan tin tu nokia gui cho iphone
    let messageFromNokia = nokia.createMessage('From nokia with love');
    nokia.sendMessage(messageFromNokia);
    iPhone.receiveMessage(messageFromNokia);
    // Kiem tra pin co con hay khong, va hop thu den co tin nhan hay khong?
    let iPhoneInboxMessages = iPhone.viewInbox();
    if (iPhoneInboxMessages && iPhoneInboxMessages.length) {
        console.log(iPhoneInboxMessages[iPhoneInboxMessages.length - 1]);
    }
}
demo();