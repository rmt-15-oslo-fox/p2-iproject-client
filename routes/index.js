const router = require('express').Router();
const CompanyController = require('../controllers/companyController')
const JobController = require('../controllers/jobController')
const UserController = require('../controllers/userController')

router.get('/companies', CompanyController.findAll)
router.post('/companies', CompanyController.create)
router.get('/companies/:id', CompanyController.findById)
router.put('/companies/:id', CompanyController.update)
router.delete('/companies/:id', CompanyController.delete)

router.get('/users', UserController.findAll)
router.post('/users', UserController.create)
router.get('/users/:id', UserController.findById)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

router.get('/jobs', JobController.findAll)
router.post('/jobs', JobController.create)
router.get('/jobs/:id', JobController.findById)
router.put('/jobs/:id', JobController.update)
router.delete('/jobs/:id', JobController.delete)

module.exports = router;