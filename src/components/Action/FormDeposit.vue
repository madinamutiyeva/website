<template>
    
    <div class="left-block">
        <InputSelect :options="options" />

        <div class="pt-4">
            <div class="font-light text-pt text-xxs pl-3">MERCHANT</div>
            <select class="px-3 py-2 border-2 rounded-lg text-sm">
                <option>USD Visa/MasterCard Chechout</option>
                <option>RUB Visa/MasterCard Chechout</option>
            </select>
        </div>
        <SubTitle name="Fee" percent="0.1%" name2="AmountRecelved:" price="0 USD" />
        <ButtonForm name="Deposit" />
    </div>

    <div class="qr-block">
        <div class="max-w-72">
            <img src="../../assets/qr.png" class="">
        </div>
        <div class="">
            <input type="text" class="border-2 rounded-xl px-3 py-2" placeholder="Address">
            <button class="bg-black rounded-xl p-2 text-white ml-1">Copy</button>
        </div>
    </div>
</template>
<script>
import InputSelect from '../InputSelect.vue'
import SubTitle from '../Subtitle.vue'
import ButtonForm from '../ButtonForm.vue'

export default {
    name: "FormDeposit",
    components: {
        InputSelect,
        SubTitle,
        ButtonForm
    },
    data() {
        return {
            options:
            {
                name: 'AMOUNT',
                logo: require('@/assets/dollar.png'),
                inputPlaceholder: '50',
                option_one: 'USD',
                option_two: 'BTC'
            },
            // subtitle:
            // {
            //     name:'Fee',
            //     percent:'0.1%',
            //     name2:'',
            //     praice:''
            // }
        }
    }
}
</script>
<style>
.qr-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>