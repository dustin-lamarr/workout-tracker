const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/workouts', async (req,res) => {
    console.log("made it to api/workouts")
    try {
        const workoutData = await Workout.find({});
        res.status(200).json(workoutData)
    } catch(err) {
        res.status(500).json(err)
    }
});

router.put('/workouts/:id', async (req,res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const workoutData = await Workout.findOneAndUpdate({_id: id}, {$push: {exercises: body}})
        res.status(200).json(workoutData)
    } catch(err) {
        res.status(400).json(err)
    }
});

router.post('/workouts', async (req,res) => {
    try {
        const newWorkout = Workout.create({})
        res.status(200).json(newWorkout)
    } catch (err) {
    res.status(400).json(err)
    }
});

router.get('/workouts/range', async(req, res) => {
    try {
        const workoutData = await Workout.find({})
        res.status(200).json(workoutData)
    } catch(err){
res.status(500).json(err)
    }
});

module.exports = router;