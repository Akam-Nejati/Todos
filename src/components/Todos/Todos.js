import { reactive ,ref } from '@vue/reactivity'
import Button from "../Button/Button.vue"
import Task from "../Task/Task.vue"
import { useToast } from "vue-toastification";
import { onUpdated } from '@vue/runtime-core';

export default {
    components: {
        Button,
        Task
    },

    setup() {
        let missions = reactive([])
        const input = ref(null)
        const filter = ref("all")
        const task_edit = ref({
            index: 0,
            text: " ",
            select_task_for_edit: false
        })


        const toast = useToast()

        function Add() {
            if (input.value.value !== "") {
                missions.push({
                    id: missions.length,
                    text: input.value.value,
                    condition: true,
                    show: true
                })

                input.value.value = ""

            } else {
                toast.error("The task box cannot be empty", {
                    position: "bottom-right",
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 1.72,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            }
        }

        function Edit() {
            missions[task_edit.value.index].text = input.value.value

            task_edit.value.select_task_for_edit = false

            input.value.value = ""

            toast.success("Edite successfully", {
                position: "bottom-right",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 1.72,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        }
        onUpdated(() => {
            localStorage.setItem("missions" , JSON.stringify(missions))
        })

        const tasks = JSON.parse(localStorage.getItem("missions"))

        if(tasks !== null){
            tasks.forEach(task => {
                missions.push(task)
            });    
        }
        
        return {
            missions,
            Add,
            Edit,
            input,
            toast,
            task_edit,
            filter
        }
    }
}