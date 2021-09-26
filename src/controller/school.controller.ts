import express from 'express';
const router = express.Router();

const data = [
    {
        id: 1,
        name: '',
    },
];

router.get('/', (req, res) => res.status(200).json(data));

router.get('/:schoolId', (req, res) => {
    const { schoolId } = req.params;
    if (!schoolId) {
        return res.status(400).json();
    }

    const schoolIdNumber = parseInt(schoolId, 10);
    if (!data.some(({ id }) => id === schoolIdNumber)) {
        return res.status(404).json();
    }
    const filltered = data.filter((item) => item.id === schoolIdNumber);
    return res.status(200).json(filltered[0]);
});
export default router;