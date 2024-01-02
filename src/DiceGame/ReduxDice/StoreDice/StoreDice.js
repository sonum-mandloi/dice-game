import { configureStore } from "@reduxjs/toolkit"
import SliceDice from "../SliceDice/SliceDice"


const StoreDice = configureStore({
    reducer:{
        Dice:SliceDice
    }
})

export default StoreDice