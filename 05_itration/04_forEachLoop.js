
const coding = ['cpp', 'java', 'kotlin', 'javascript'];

// const languages = coding.forEach( (item) => console.log(item));


const arrOfObj = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "Kotlin",
        languageFileName : "KT"
    },
    {
        languageName : "Python",
        languageFileName : "PY"
    }
]

arrOfObj.forEach( (item) => {
    console.log(item["languageFileName"]);
    
})

