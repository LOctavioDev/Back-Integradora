import axios from "axios"
const actions = {}

const arduinoIP = "192.168.137.253"
const arduinoPort = "3000"

actions.room1Door = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/room1/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.room1Window = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/room1/openWindow`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.room1Light = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/room1/ligth`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.room2Door = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/room2/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.room3Door = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/room3/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.bathroom1Door = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/bathroom1/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.bathroom2Door = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/bathroom2/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.kitchenDoor = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/kitchen/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.livingRoomDoor = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/livingRoom/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

actions.garajeDoor = async (req, res) => {
    try {
        const response = await axios.get(`http://${arduinoIP}:${arduinoPort}/action/garaje/openDoor`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default actions;