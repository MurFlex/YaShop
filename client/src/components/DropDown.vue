<template>
    <div class="dropdown-wrapper" ref="dropDown">
        <div class="dropdown-selected-option"
            @click="isDropDownVisible=true"
        >
            {{ mappedSelectedOption }}
        </div>
        <transition name="slide-fade">
            <div 
                class="options-wrapper"
                v-if="isDropDownVisible"
            >
            <div 
                class="option"
                v-for="(option, index) in props.options"
                :key="index"
                @click="toggleOptionSelect(option)"
                >
                {{ option.name || option }}
            </div>
        </div>
        </transition>
    </div>
</template>

<script setup lang='ts'>

import { defineProps, ref, computed, defineEmits, onBeforeMount, onMounted} from 'vue'

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        default: null
    }
})

const selectedOption=ref(null);

const dropDown = ref(null)

const mappedSelectedOption = computed(()=> {
    return((selectedOption.value?.name ||
        selectedOption.value) || 'Please select something'
    )
})

const toggleOptionSelect = (option) => {
    selectedOption.value = option
    setTimeout(()=> {
        isDropDownVisible.value = false}
    )
    emit('update:modelValue', option)
}

const closeDropDown = (element) => {
    if(!dropDown.value.contains(element.target)){
        isDropDownVisible.value = false
    }
}

onMounted(()=> {
    window.addEventListener('click', closeDropDown)
})

onBeforeMount(()=> {
    window.removeEventListener('click', closeDropDown)
})

const emit = defineEmits(['update:modelValue'])

const isDropDownVisible = ref(false)

</script>

<style>

.dropdown-wrapper {
    padding: 16;
    cursor: pointer;
    max-width: 200px;
    margin: 0 auto;
}

.dropdown-selected-option {
    padding: 16px;
    border: solid 1px #313131;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 4px;
}

.option:hover {
    background: #c5c5c5;
}

.option {
    padding: 16px;
    border: solid 1px #313131;
    box-sizing: border-box;
}

.option:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-4px);
    opacity: 0;
}

</style>