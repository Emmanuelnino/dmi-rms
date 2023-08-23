const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function Student(req, res) {
    try {
        const { regno, name, password } = req.body
        const newStudent = await prisma.student.create({
            data: {
                regno,
                name,
                password
            },

        });
        res.json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
}

async function Lecturer(req, res) {
    try {
        const { regno, name, password } = req.body
        const newLecturer = await prisma.lecturer.create({
            data: {
                regno,
                name,
                password
            },
        });
        res.json(newLecturer);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
}

async function Results(req, res) {
    try {
        const { regno, name, semester, code, mark, gpa } = req.body
        const newResults = await prisma.result.create({
            data: {
                regno,
                name,
                semester,
                code,
                mark,
                gpa
            },
        });
        res.json(newResults);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
}
async function updateUser(req, res) {

    const { id } = req.params;
    const { regno, name, password } = req.body


    try {
        const updateUser = await prisma.student.update({
            where: { id: parseInt(id) },
            data: {
                name: name,
                regno: regno,
                password: password
            },
        });
        res.status(200).json(updateUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'An error occurred while updating user.' });
    }

}
async function updateUser(req, res) {

    const { id } = req.params;
    const { regno, name, password } = req.body


    try {
        const updateUser = await prisma.student.update({
            where: { id: parseInt(id) },
            data: {
                name: name,
                regno: regno,
                password: password
            },
        });
        res.status(200).json(updateUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'An error occurred while updating user.' });
    }

}
async function deleteUser(req, res) {

    const { id } = req.params;
    try {
        await prisma.lecturer.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json("Lecturer deleted successfully");
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'An error occurred while deleting user.' });

    }
}

async function updateUser(req, res) {

    const { id } = req.params;
    const { regno, name, password } = req.body


    try {
        const updateUser = await prisma.student.update({
            where: { id: parseInt(id) },
            data: {
                name: name,
                regno: regno,
                password: password
            },
        });
        res.status(200).json(updateUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'An error occurred while updating user.' });
    }

}
module.exports = { Student, Lecturer, Results, updateUser, deleteUser };