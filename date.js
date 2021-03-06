Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

const getCurrentDate = _ => {
    const newDate = new Date()
    return newDate.today()
}

const getCurrentTime = _ => {
    const newDate = new Date()
    return newDate.timeNow()
}

const getCurrentDateTime = _ => {
    const newDate = new Date()
    return newDate.today() + " @ " + newDate.timeNow()
}

module.exports = {
    getCurrentDate: getCurrentDate,
    getCurrentTime: getCurrentTime,
    getCurrentDateTime: getCurrentDateTime
}

