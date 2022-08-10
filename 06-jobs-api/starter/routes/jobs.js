const express = require('express');
const router = express.Router()


const {
  createJob,
  getAllJobs,
  getJob,
  deleteJob,
  updateJob
}=require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').post(deleteJob).get(getJob).patch(updateJob)

module.exports=router