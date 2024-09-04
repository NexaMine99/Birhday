new Vue({
    el: '#app',
    data: {
        isBirthdayPassed: false,
        showBox: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    },
    created() {
        this.updateCountdown();
        setInterval(this.updateCountdown, 1000);
    },
    methods: {
        updateCountdown() {
            const targetDate = new Date("2024-09-06T00:00:00+05:30"); // Target date
            const now = new Date();
            const timeDifference = targetDate - now;
            
            if (timeDifference <= 0) {
                this.isBirthdayPassed = true;
                return;
            }

            this.isBirthdayPassed = false;
            this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        },
        showHiddenBox() {
            this.showBox = true;
        }
    }
});
