import Credential from '../models/Credential.js';

export const getCredentials = async (req, res) => {
    try {
        const credentials = await Credential.findAll();
        res.json(credentials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCredentialByUserId = async (req, res) => {
    try {
        const credential = await Credential.findOne({ where: { user_id: req.params.user_id } });
        if (!credential) return res.status(404).json({ message: "Credential not found" });
        res.json(credential);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCredential = async (req, res) => {
    try {
        const credential = await Credential.create(req.body);
        res.status(201).json(credential);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCredential = async (req, res) => {
    try {
        const credential = await Credential.findOne({ where: { user_id: req.params.user_id } });
        if (!credential) return res.status(404).json({ message: "Credential not found" });

        await credential.destroy();
        res.json({ message: "Credential deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
