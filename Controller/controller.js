const {PrismaClient} = require('@prisma/client');

const prisma =new PrismaClient()


async function Student (req,res){
    try{
        const{regno,name,password}=req.body
        const newStudent = await prisma.student.create({
            data:{
                regno,
                name,
                password
            },
                
        });
        res.json(newStudent);
    }catch(error){
        res.status(500).json({error:'internal server error'})
    }
} 

async function Lecturer (req,res){
    try{
        const{regno,name,password}=req.body
        const newLecturer = await prisma.lecturer.create({
            data:{
                regno,
                name,
                password
            },
        });
        res.json(newLecturer);
    }catch(error){
        res.status(500).json({error:'internal server error'})
    }
}

async function Results (req,res){
    try{
        const{regno,name,semester,code,mark,gpa}=req.body
        const newResults = await prisma.result.create({
            data:{
                regno,
                name,
                semester,
                code,
                mark,
                gpa
            },
        });
        res.json(newResults);
    }catch(error){
        res.status(500).json({error:'internal server error'})
    }
}


module.exports={Student,Lecturer,Results};