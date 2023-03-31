let rollNumber = document.getElementById('rollNumberInput');
let studentName = document.getElementById('studentName')
let fatherName = document.getElementById('fatherName')
let className = document.getElementById('className')
let dateOfBirth = document.getElementById('dateOfBirth')
let motherName = document.getElementById('motherName')
let attendance = document.getElementById('attendance')
let schoolName = document.getElementById('schoolName')
let schoolAdress = document.getElementById('schoolAdress')
let schoolPhomeNo = document.getElementById('schoolPhomeNo')
let schoolEmail = document.getElementById('schoolEmail')

//Table rows elements
let englishInternal1 = document.getElementById('englishInternal1');
let englishTerm1 = document.getElementById('englishTerm1')

let englishInternal2 = document.getElementById('englishInternal2');
let englishTerm2 = document.getElementById('englishTerm2')

let hindiInternal1 = document.getElementById('hindiInternal1');
let hindiTerm1 = document.getElementById('hindiTerm1')

let hindiInternal2 = document.getElementById('hindiInternal2');
let hindiTerm2 = document.getElementById('hindiTerm2')

let mathsInternal1 = document.getElementById('mathsInternal1');
let mathsTerm1 = document.getElementById('mathsTerm1')

let mathsInternal2 = document.getElementById('mathsInternal2');
let mathsTerm2 = document.getElementById('mathsTerm2')

let marksTotalEnglish1 = document.getElementById('marksTotalEnglish1')
let marksTotalEnglish2 = document.getElementById('marksTotalEnglish2')

let marksTotalHindi1 = document.getElementById('marksTotalHindi1')
let marksTotalHindi2 = document.getElementById('marksTotalHindi2')

let marksTotalMaths1 = document.getElementById('marksTotalMaths1')
let marksTotalMaths2 = document.getElementById('marksTotalMaths2')

//subject wise total
let finalEnglishTotal = document.getElementById('finalEnglishTotal')
let finalEnglishGrade = document.getElementById('finalEnglishGrade')

let finalHindiTotal = document.getElementById('finalHindiTotal')
let finalHindiGrade = document.getElementById('finalHindiGrade')

let finalMathsTotal = document.getElementById('finalMathsTotal')
let finalMathsGrade = document.getElementById('finalMathsGrade')

//Total Count scores
let tcInternals1 = document.getElementById('tcInternals1')
let tcTerm1 = document.getElementById('tcTerm1')
let tcSem1 = document.getElementById('tcSem1')
let tcInternals2 = document.getElementById('tcInternals2')
let tcTerm2 = document.getElementById('tcTerm2')
let tcSem2 = document.getElementById('tcSem2')
let tcFinalMarks = document.getElementById('tcFinalMarks')
let tcGrade = document.getElementById('tcGrade')

//results
let percentage = document.getElementById('percentage')
let studentGradeOverall = document.getElementById('studentGradeOverall')


const getGrade = (total) => {
    let grade
    if ((total/2) <= 33){
        grade = "E"
    }else if ((total/2) <= 40){
        grade = "D"
    }else if ((total/2) <= 50){
        grade = "C2"
    }else if ((total/2) <= 60){
        grade = "C1"
    }else if ((total/2) <= 70){
        grade = "B2"
    }else if ((total/2) <= 80){
        grade = "B1"
    }else if ((total/2) <= 90){
        grade = "A2"
    }else{
        grade = "A1"
    }
    return grade
}

const showDetails = (progressReport) => {
    const Exam = progressReport.ExamMasters
    const inetrnal = progressReport.lstInternal
    const student = progressReport.lstStudentInfo[0]
    const grades = progressReport.stGrades
    const attendanceArray = student.Attandence
    let totalMonthPresence = 0
    attendanceArray.forEach(each => {
        totalMonthPresence += each.MonthPresence
    });
    // ----------ENGLISH----------------------
    //internals
    const internals = student.stInternals
    const englishInternals = internals.filter(each=> each.ExamSubjectName ==="ENGLISH")
    const englishinternalsTerm1 = Math.max(englishInternals[0].ScoredMarks,englishInternals[1].ScoredMarks)
    const englishinternalsTerm2 = Math.max(englishInternals[2].ScoredMarks,englishInternals[3].ScoredMarks)
    console.log(student)
    // console.log(englishinternalsTerm1)
    englishInternal1.textContent = englishinternalsTerm1
    englishInternal2.textContent = englishinternalsTerm2
    // console.log(englishinternalsTerm2)
    //term exams
    const Term1 = student.lstStudent.filter(each=>each.RptName ==="Best Score PT-I, II")
    // console.log(Term1)
    const english1 = Term1.find(each => each.SubjectName==="ENGLISH").Marks
    // console.log(englishTerm1)
    englishTerm1.textContent = english1
    const Term2 = student.lstStudent.filter(each=>each.RptName ==="Best Score PT-III, IV")
    // console.log(Term1)
    const english2 = Term2.find(each => each.SubjectName==="ENGLISH").Marks
    // console.log(english2)
    englishTerm2.textContent = english2

    marksTotalEnglish1.textContent = englishinternalsTerm1+english1
    marksTotalEnglish2.textContent = englishinternalsTerm2+english2

    let total = englishinternalsTerm1+english1+englishinternalsTerm2+english2
    finalEnglishTotal.textContent = total
    finalEnglishGrade.textContent = getGrade(total)
    

    //---------------------HINDI------------------------
    //internals
    
    const hindiInternals = internals.filter(each=> each.ExamSubjectName ==="HINDI")
    console.log(hindiInternals)
    const hindiinternalsTerm1 = Math.max(hindiInternals[0].ScoredMarks,hindiInternals[1].ScoredMarks)
    const hindiinternalsTerm2 = Math.max(hindiInternals[2].ScoredMarks,hindiInternals[3].ScoredMarks)
    
    
    hindiInternal1.textContent = hindiinternalsTerm1
    hindiInternal2.textContent = hindiinternalsTerm2
    // console.log(hindiinternalsTerm2)
    //term exams
    
    const hindi1 = Term1.find(each => each.SubjectName==="HINDI").Marks
    
    // console.log(hindi1)
    hindiTerm1.textContent = hindi1
    
    const hindi2 = Term2.find(each => each.SubjectName==="HINDI").Marks
    // console.log(hindi2)
    hindiTerm2.textContent = hindi2

    marksTotalHindi1.textContent = hindiinternalsTerm1+hindi1
    marksTotalHindi2.textContent = hindiinternalsTerm2+hindi2
    total = hindiinternalsTerm1+hindi1+hindiinternalsTerm2+hindi2
    finalHindiTotal.textContent = total
    finalHindiGrade.textContent = getGrade(total)

    //---------------------MATHS------------------------
    //internals
    
    const mathsInternals = internals.filter(each=> each.ExamSubjectName ==="HINDI")
    console.log(hindiInternals)
    const mathsinternalsTerm1 = Math.max(mathsInternals[0].ScoredMarks,mathsInternals[1].ScoredMarks)
    const mathsinternalsTerm2 = Math.max(mathsInternals[2].ScoredMarks,mathsInternals[3].ScoredMarks)
    
    
    mathsInternal1.textContent = mathsinternalsTerm1
    mathsInternal2.textContent = mathsinternalsTerm2
    console.log(mathsinternalsTerm2)
    //term exams
    
    const maths1 = Term1.find(each => each.SubjectName==="MATHMATICS").Marks
    
    // console.log(hindi1)
    mathsTerm1.textContent = maths1
    
    const maths2 = Term2.find(each => each.SubjectName==="MATHMATICS").Marks
    // console.log(hindi2)
    mathsTerm2.textContent = maths2

    marksTotalMaths1.textContent = mathsinternalsTerm1+maths1
    marksTotalMaths2.textContent = mathsinternalsTerm2+maths2

    total = mathsinternalsTerm1+maths1+mathsinternalsTerm2+maths2
    finalMathsTotal.textContent = total
    finalMathsGrade.textContent = getGrade(total)

    tcInternals1.textContent = englishinternalsTerm1+hindiinternalsTerm1+mathsinternalsTerm1
    tcInternals2.textContent = englishinternalsTerm2+hindiinternalsTerm2+mathsinternalsTerm2

    tcTerm1.textContent = english1+hindi1+maths1
    tcTerm2.textContent = english2+hindi2+maths2
    let sem1Total = englishinternalsTerm1+english1+hindiinternalsTerm1+hindi1+mathsinternalsTerm1+maths1
    tcSem1.textContent = sem1Total
    let sem2Total = englishinternalsTerm2+english2+hindiinternalsTerm2+hindi2+mathsinternalsTerm2+maths2
    tcSem2.textContent = sem2Total
    const finalTotal = englishinternalsTerm1+english1+englishinternalsTerm2+english2+
                    hindiinternalsTerm1+hindi1+hindiinternalsTerm2+hindi2+
                    mathsinternalsTerm1+maths1+mathsinternalsTerm2+maths2
    tcFinalMarks.textContent = finalTotal

    tcGrade.textContent = getGrade(finalTotal/3)

    percentage.textContent = (finalTotal/600) * 100
    studentGradeOverall.textContent = getGrade(finalTotal/3)

    rollNumber.textContent = student.RollNumber
    studentName.textContent = student.Name
    fatherName.textContent = student.FatherName
    className.textContent = student.ClassName
    dateOfBirth.textContent = student.DOB
    motherName.textContent = student.MotherName
    attendance.textContent = totalMonthPresence
    schoolName.textContent = student.SchoolName
    schoolAdress.textContent = student.SchoolAddress
    schoolPhomeNo.textContent = student.SchoolPhoneNumber
    schoolEmail.textContent = student.SchoolEmail
    schoolEmail.setAttribute('href',student.SchoolEmail)
}




const getStudentDetails = async () => {
    const response = await fetch('http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521');
    const data = await response.json()
    const progressReport = data.Response.ProgressList
    console.log(progressReport)
    showDetails(progressReport)
}

getStudentDetails()

