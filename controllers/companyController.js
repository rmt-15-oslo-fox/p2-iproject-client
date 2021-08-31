const { Company } = require('../models');

class CompanyController {
    static async findAll(req, res) {
        try {
            const result = await Company.findAll()
            res.status(200).json(result)

        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async create(req, res) {
        const { name, companyLogo, location, email, description } = req.body;

        try {
            const result = await Company.create({name, companyLogo, location, email, description});
            res.status(201).json(result);

        } catch(err) {
            if (err.name === 'SequelizeValidationError') {
                const errors = err.errors.map (err => {
                    return err.message
                })
                res.status(400).json({ 'message': errors });
            }
            else res.status(500).json(err);
        }
    }

    static async findById(req, res) {
        const { id } = req.params
        try {
            if (id){
                const result = await Company.findByPk(id)
                res.status(200).json(result)
            }
            else res.status(400).json( { message: `Company with id ${id} not found` } )

        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async update(req, res) {
        const { name, companyLogo, location, email, description } = req.body;
        const { id } = req.params;
        try {
            const company = await Company.findByPk(id);
            if (company) {
                const result = await Company.update( { name, companyLogo, location, email, description }, { where: { id }, returning: {} });
                res.status(200).json(result[1][0]);
            }
            else res.status(404).json( { message: `Company id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        const { name, companyLogo, location, email, description } = req.body;
        const { id } = req.params;
        try {
            const company = await Company.findByPk(id);
            if (company) {
                await Company.destroy( { where: { id } });
                res.status(200).json( { message: `Company id ${id} has been deleted` } );
            }
            else res.status(404).json( { message: `Company id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = CompanyController;