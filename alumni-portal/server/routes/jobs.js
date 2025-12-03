const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/jobs - Create a new job posting
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, company, description } = req.body;
        const newJob = new Job({
            title,
            company,
            description,
            postedBy: req.user.id,
        });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
});

// GET /api/jobs - Get all job postings
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find().populate('postedBy', 'name');
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

// POST /api/jobs/apply/:id - Apply for a job
router.post('/apply/:id', authMiddleware, async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.applicants.includes(req.user.id)) {
            return res.status(400).json({ message: 'Already applied for this job' });
        }
        job.applicants.push(req.user.id);
        await job.save();
        res.status(200).json({ message: 'Applied successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error applying for job', error });
    }
});

module.exports = router;