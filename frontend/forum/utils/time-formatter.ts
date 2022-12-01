const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit",
    numeric: "always",
    style: "long",
});

const TIMES: { amount: number, name: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34517, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' }
]

export default function formatTime(date: Date) {
    const today = new Date();
    let duration = (date.getTime() - today.getTime()) / 1000;

    let last_time = TIMES[0];
    for (let i = 0; i < TIMES.length; i++) {
        const actual_time = TIMES[i];

        if (Math.abs(duration) < TIMES[i].amount) {
            if (["weeks", "years"].includes(actual_time.name)) {
                const second_value = Math.round(duration * last_time.amount) % last_time.amount;
                if (second_value != 0) {
                    const first = rtf.format(Math.round(duration), actual_time.name).replace(" ago", "");
                    const second = rtf.format(second_value, last_time.name);
                    return `${first}, ${second}`;
                }
            }
            return rtf.format(Math.round(duration), actual_time.name)
        }
        duration /= actual_time.amount
        last_time = actual_time;
    }
}