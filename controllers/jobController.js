const { Job } = require('../models')

class JobController {
    static async findAll (req, res) {
        try {
            const result = await Job.findAll()
            res.status(200).json(result)

        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async create (req, res) {
        const { title, description, imgUrl, CompanyId, AuthorId, jobType } = req.body

        try {
            const result = await Job.create( { title, description, imgUrl, CompanyId, AuthorId, jobType } )
            res.status(201).json(result);

        } catch(err) {
            if (err.name === 'SequelizeValidationError') {
                const errors = err.errors.map (err => {
                    return err.message
                })
                res.status(400).json( { 'message': errors } );
            }
            else res.status(500).json(err);
        }
    }

    static async findById(req, res) {
        const { id } = req.params
        const job = Job.findByPk(id)
        try {
            if (job){
                const result = await Job.findByPk(id)
                res.status(200).json(result)
            }
            else res.status(400).json( { message: `Job with id ${id} not found` } )

        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async update(req, res) {
        const { title, description, imgUrl, CompanyId, AuthorId, jobType } = req.body;
        const { id } = req.params;
        try {
            const job = await Job.findByPk(id);
            if (job) {
                const result = await Job.update( { title, description, imgUrl, CompanyId, AuthorId, jobType }, { where: { id }, returning: {} });
                res.status(200).json(result[1][0]);
            }
            else res.status(404).json( { message: `Job id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        const { title, description, imgUrl, CompanyId, AuthorId, jobType } = req.body;
        const { id } = req.params;
        try {
            const job = await Job.findByPk(id);
            if (job) {
                await Job.destroy( { where: { id } });
                res.status(200).json( { message: `Job id ${id} has been deleted` } );
            }
            else res.status(404).json( { message: `Job id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = JobController;