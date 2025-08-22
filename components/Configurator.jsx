// src/components/Configurator.jsx
import { useEffect } from 'react'
import useGameStore from '../store/gameStore'
import Header from './Header'
import Sidebar from './Sidebar'
import Canvas from './Canvas'
import Actions from './Actions'
import Notification from './Notification'

export default function Configurator() {
    const loadVehicleFromUrl = useGameStore((s) => s.loadVehicleFromUrl)

    useEffect(() => {
        loadVehicleFromUrl()
    }, [loadVehicleFromUrl])

    return (
        <div className='App'>
            <Header />
            <Canvas />
            <Sidebar />
            <Actions />
            <Notification />
        </div>
    )
}
