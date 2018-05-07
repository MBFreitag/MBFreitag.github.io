function Timer(temptotalt) {
    this.savedt = 0;
    this.totalt = temptotalt;
    this.begin = function() {
        this.savedt = millis();
    };
    this.isFinished = function() {
        var passedt = millis() - this.savedt;
        if (passedt > this.totalt) {
            return true;
        } else {
            return false;
        }
    };
}
