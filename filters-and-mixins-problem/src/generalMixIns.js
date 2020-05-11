export const genetalMixins = {
    computed: {
        compReverseMe(value) {
            return this.textComputed
                .split("")
                .reverse()
                .join("");
        },
        compCountMe(value) {
            return `${this.countComputed} (${this.countComputed.replace(/\s+/g, '').length})`

        }
    }
}