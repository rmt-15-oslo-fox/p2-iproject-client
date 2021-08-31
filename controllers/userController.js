const { User } = require('../models')

class UserController {
    static async findAll (req, res) {
        try {
            const result = await User.findAll()
            res.status(200).json(result)

        } catch (error) {
            res.status(500).json(err)
        }
    }

    static async create(req, res) {
        const { name, email, password, addres } = req.body;

        try {
            const result = await User.create({ name, email, password, addres });
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
        const user = await User.findByPk(id)
        try {
            if (user){
                const result = await User.findByPk(id)
                res.status(200).json(result)
            }
            else res.status(400).json( { message: `User with id ${id} not found` } )

        } catch(err) {
            res.status(500).json(err)
        }
    }

    static async update(req, res) {
        const { name, email, password, addres } = req.body;
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                const result = await User.update( { name, email, password, addres }, { where: { id }, returning: {} });
                res.status(200).json(result[1][0]);
            }
            else res.status(404).json( { message: `User id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        const { name, email, password, addres } = req.body;
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await User.destroy( { where: { id } });
                res.status(200).json( { message: `User id ${id} has been deleted` } );
            }
            else res.status(404).json( { message: `User id ${id} not found` } );

        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = UserController;