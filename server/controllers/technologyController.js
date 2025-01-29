import Technology from '../models/Technology.js';

export const getTechnologies = async (req, res) => {
    try {
        const technologies = await Technology.findAll();
        res.json(technologies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTechnologyById = async (req, res) => {
    try {
        const technology = await Technology.findByPk(req.params.id);
        if (!technology) return res.status(404).json({ message: "Technology not found" });
        res.json(technology);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createTechnology = async (req, res) => {
    try {
        const technology = await Technology.create(req.body);
        res.status(201).json(technology);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTechnology = async (req, res) => {
    try {
        const technology = await Technology.findByPk(req.params.id);
        if (!technology) return res.status(404).json({ message: "Technology not found" });

        await technology.destroy();
        res.json({ message: "Technology deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
