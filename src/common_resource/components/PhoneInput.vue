<template>
    <input
        type="tel"
        pattern="[0-9]*"
        maxlength="13"
        class="common_input phone_input"
        v-model="phone"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :disabled="disabled"
        @input="update"
        @keyup="formatPhone">
</template>

<script>
    export default {
        name: "PhoneInput",
        model: {
            prop: 'phone',
            event: 'update_phone'
        },
        props: {
            phone: {
                type: String
            },
            placeholder: {
                type: String,
                default: '请填写您的手机号'
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                write: false
            }
        },
        watch: {
            phone (newValue, oldValue) {
                this._input = newValue;
                if(newValue && oldValue && newValue.length > oldValue.length) {
                    this.write = true;
                } else {
                    this.write = false;
                }
            }
        },
        methods: {
            update() {
                this.$emit('update_phone', this.phone);
                this.$emit('input');
            },
            formatPhone() {
                let rp = this.phone;
                if(this.write) {
                    if(rp.length === 4 || rp.length === 9) {
                        let pre = rp.substring(0, rp.length - 1);
                        let last = rp.substr(rp.length - 1, 1);
                        this.phone = pre + ' ' + last;
                    } else if (rp.length >= 11) {
                        let newPhone = rp.replace(/\s+/g, '').substring(0,11);
                        let pre = newPhone.substring(0, 3);
                        let mid = newPhone.substring(3, 7);
                        let last = newPhone.substring(7, 12);
                        this.phone = pre + ' ' + mid + ' ' + last;
                    }
                } else {
                    if(rp.length === 4 || rp.length === 9) {
                        this.phone = rp.substring(0,rp.length - 1)
                    }
                }
                this.$emit('keyup');
            }
        }
    }
</script>

<style lang="scss">
</style>